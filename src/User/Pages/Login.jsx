import React from "react";
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
} from "reactstrap";

const Login = () => {

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Input must be Email")
      .required("Email is Required"),
    password: Yup.string()
      .min(8, "Password cannot be less than 8")
      .required("Password is Required"),
  });

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
            <styles.Logo src={require("../Assets/Images/Logo.png")} alt="" />
          </Col>
          <Col
            xs={12}
            className="m-3 d-flex align-items-center justify-content-center"
          >
            <styles.Message>Please login with your account</styles.Message>
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
                email: "",
                password: "",
              }}
              validationSchema={validationSchema}
              onSubmit={async (values) => {
                const data = {
                  email: values.email,
                  password: values.password,
                };
                console.log(data);
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
                      value={values.email}
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Email"
                      required
                      autoFocus
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
                  <h6 className="text-warning text-right">Forgot password ?</h6>
                  <styles.Button block type="submit" disabled={isSubmitting}>
                    LOGIN
                  </styles.Button>
                </Form>
              )}
            </Formik>
          </Col>
          <Col
            xs={12}
            className="m-3 d-flex align-items-center justify-content-center"
          >
            <styles.Message>Don't have a Shoppe.id account?</styles.Message>
            &nbsp;
            <styles.Message className="text-warning text-right">
              Register
            </styles.Message>
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

export default Login;
