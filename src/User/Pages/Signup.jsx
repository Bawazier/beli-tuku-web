import React, { useState, useEffect } from "react";
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
  ButtonGroup,
  Form,
  Input,
  FormGroup,
  Spinner,
  Modal,
  ModalFooter,
  ModalBody,
} from "reactstrap";

//Actions
import AuthActions from "../Redux/actions/auth";

const Signup = () => {
  const auth = useSelector((state) => state.auth);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const validationSchema = Yup.object({
    name: Yup.string().max(80, "name cannot be too long").required(),
    email: Yup.string().email("Input must be Email").required(),
    password: Yup.string()
      .min(8, "Password cannot be less than 8")
      .required("Password is Required"),
  });

  useEffect(() => {
    dispatch(AuthActions.logout());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!auth.isSignupLoading && auth.isSignupError) {
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
        {error ? (
          <Modal isOpen={error} toggle={() => setError(!error)}>
            <ModalBody className="text-danger text-center h5">
              Email has been used, please try again
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={() => setError(!error)}>
                TRY AGAIN
              </Button>
            </ModalFooter>
          </Modal>
        ) : auth.isSignupLoading ? (
          <Spinner
            style={{ width: "5rem", height: "5rem", color: "#1bc29b" }}
            type="grow"
          />
        ) : (
          <Row className="w-50 align-items-center justify-content-center">
            <Col
              xs={12}
              className="d-flex align-items-center justify-content-center"
            >
              <Link to="/">
                <styles.Logo
                  src={require("../Assets/Images/Logo.png")}
                  alt=""
                />
              </Link>
            </Col>
            <Col
              xs={12}
              className="m-3 d-flex align-items-center justify-content-center"
            >
              <styles.Message>Please sign up with your account</styles.Message>
            </Col>
            <Col
              xs={12}
              className="m-3 d-flex align-items-center justify-content-center"
            >
              <ButtonGroup>
                <styles.RoleButton>Customer</styles.RoleButton>
                <styles.RoleButton disabled>Seller</styles.RoleButton>
              </ButtonGroup>
            </Col>
            <Col
              xs={12}
              className="m-3 d-flex align-items-center justify-content-center"
            >
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  password: "",
                }}
                validationSchema={validationSchema}
                onSubmit={async (values) => {
                  const data = {
                    name: values.name,
                    email: values.email,
                    password: values.password,
                  };
                  await dispatch(AuthActions.signup(data));
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
                        value={values.name}
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Name"
                        required
                        autoFocus
                      />
                      <h6 className="text-danger pt-2">
                        {errors.name && touched.name ? errors.name : null}
                      </h6>
                    </FormGroup>
                    <FormGroup>
                      <Input
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Email"
                        required
                      />
                      <h6 className="text-danger pt-2">
                        {errors.email && touched.email ? errors.email : null}
                      </h6>
                    </FormGroup>
                    <FormGroup>
                      <Input
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        placeholder="Password"
                        required
                      />
                      <h6 className="text-danger pt-2">
                        {errors.password && touched.password
                          ? errors.password
                          : null}
                      </h6>
                    </FormGroup>
                    <h6 className="text-warning text-right">&nbsp;</h6>
                    <styles.Button block type="submit" disabled={isSubmitting}>
                      SIGNUP
                    </styles.Button>
                  </Form>
                )}
              </Formik>
            </Col>
            <Col
              xs={12}
              className="m-3 d-flex align-items-center justify-content-center"
            >
              <styles.Message>Already have a Beli Tuku account?</styles.Message>
              &nbsp;
              <Link to="/login">
                <styles.Message className="text-warning text-right">
                  Login
                </styles.Message>
              </Link>
            </Col>
          </Row>
        )}
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

export default Signup;
