import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Input,
  FormGroup,
} from "reactstrap";

//Actions
import AuthActions from "../Redux/actions/auth";

const ConfirmPass = () => {
  const auth = useSelector((state) => state.auth);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const validationSchema = Yup.object({
    newPassword: Yup.string()
      .min(8, "New Password cannot be less than 8")
      .required("New Password is Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("newPassword"), null], "Passwords not match")
      .required("Password confirmation is required"),
  });

  useEffect(() => {
    if (!auth.isLoading && auth.isError) {
      setError(!error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  return (
    <>
      <styles.GlobalStyle />
      <styles.Container
        fluid
        className="d-flex align-items-center justify-content-center"
      >
        <Row className="w-50 align-items-center justify-content-center">
          <Col
            xs={12}
            className="d-flex align-items-center justify-content-center"
          >
            <Link to="/">
              <styles.Logo src={require("../Assets/Images/Logo.png")} alt="" />
            </Link>
          </Col>
          <Col
            xs={12}
            className="m-3 d-flex align-items-center justify-content-center"
          >
            <styles.Message>Reset password</styles.Message>
          </Col>
          <Col
            xs={12}
            className="m-3 d-flex align-items-center justify-content-center"
          >
            <styles.Message className="text-danger">
              You need to change your password to activate your account
            </styles.Message>
          </Col>
          <Col
            xs={12}
            className="m-3 d-flex align-items-center justify-content-center"
          >
            <Formik
              initialValues={{
                newPassword: "",
                confirmPassword: "",
              }}
              validationSchema={validationSchema}
              onSubmit={async (values) => {
                const data = {
                  newPassword: values.newPassword,
                  confirmNewPassword: values.confirmPassword,
                };
                console.log(auth.emailValidData.id);
                await dispatch(
                  AuthActions.forgotPass(auth.emailValidData.id, data)
                );
                history.push("/login");
              }}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                touched,
                values,
                errors,
              }) => (
                <Form className="w-50" onSubmit={handleSubmit}>
                  <FormGroup>
                    <Input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.newPassword}
                      type="password"
                      className="form-control"
                      id="newPassword"
                      name="newPassword"
                      placeholder="New Password"
                      required
                    />
                    <h6 className="text-danger pt-2">
                      {errors.newPassword && touched.newPassword
                        ? errors.newPassword
                        : null}
                    </h6>
                  </FormGroup>
                  <FormGroup>
                    <Input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.confirmPassword}
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="Confirmation New Password"
                      required
                    />
                    <h6 className="text-danger pt-2">
                      {errors.confirmPassword && touched.confirmPassword
                        ? errors.confirmPassword
                        : null}
                    </h6>
                  </FormGroup>
                  <styles.Button block type="submit" disabled={isSubmitting}>
                    RESET
                  </styles.Button>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </styles.Container>
    </>
  );
};

const styles = {
  GlobalStyle: createGlobalStyle`
    body {
      background-color: #102939;
      margin:0;
      padding:0;
      line-height: 1.5em;
      height: 100%;
      width: 100%;
    }
  `,
  Logo: styled.img`
    width: 150px;
    height: 50px;
  `,

  Container: styled(Container)`
    height: 100vmin;
  `,

  Message: styled.h6`
    color: #1bc29b;
  `,

  Button: styled(Button)`
    background-color: #1bc29b;
    font-weight: bold;
  `,

  RoleButton: styled(Button)`
    background-color: #1bc29b;
    font-weight: bold;
  `,
};

export default ConfirmPass;
