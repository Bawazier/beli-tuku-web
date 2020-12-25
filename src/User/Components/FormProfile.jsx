import React from "react";
import styled from 'styled-components';
import { Row, Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Formik, Field } from "formik";
import * as Yup from "yup";

const FormProfile = () => {

  const validationSchema = Yup.object({
    name: Yup.string().max(80, "name cannot be too long").required(),
    email: Yup.string().email("Input must be Email").required(),
    phoneNumber: Yup.number()
      .integer("Invalid phone number. Please try again.")
      .min(1000000000, "Invalid phone number. Please try again.")
      .max(99999999999, "Invalid phone number. Please try again.")
      .required("Phone number is Required"),
    dateOfBirth: Yup.date(),
  });

  return (
    <Row>
      <Col xs={8}>
        <Formik
          initialValues={{
            name: "",
            email: "",
            phoneNumber: "",
            gender: "Male",
            dateOfBirth: "",
          }}
          validationSchema={validationSchema}
          onSubmit={async (values) => {
            const data = {
              name: values.name,
              email: values.email,
              phoneNumber: values.phoneNumber,
              gender: values.gender,
              dateOfBirth: values.dateOfBirth,
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
            <Form onSubmit={handleSubmit}>
              <FormGroup row>
                <Label for="name" sm={3} className="text-muted">
                  Name
                </Label>
                <Col sm={9}>
                  <Input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    required
                  />
                  <h6 className="text-danger pt-2">
                    {errors.name && touched.name ? errors.name : null}
                  </h6>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="email" sm={3} className="text-muted">
                  Email
                </Label>
                <Col sm={9}>
                  <Input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    required
                  />
                  <h6 className="text-danger pt-2">
                    {errors.email && touched.email ? errors.email : null}
                  </h6>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="phoneNumber" sm={3} className="text-muted">
                  Phone Number
                </Label>
                <Col sm={9}>
                  <Input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phoneNumber}
                    type="phoneNumber"
                    className="form-control"
                    id="phoneNumber"
                    name="phoneNumber"
                    required
                  />
                  <h6 className="text-danger pt-2">
                    {errors.phoneNumber && touched.phoneNumber ? errors.phoneNumber : null}
                  </h6>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="gender" sm={4} className="text-muted">
                  Gender
                </Label>
                <Col sm={4}>
                  <Field type="radio" name="gender" value="Male" /> Male
                </Col>
                <Col sm={4}>
                  <Field type="radio" name="gender" value="Female" /> Female
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="dateOfBirth" sm={3} className="text-muted">
                  Date of Birth
                </Label>
                <Col xs={9}>
                  <Input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.dateOfBirth}
                    className="form-control"
                    required
                    type="date"
                    name="dateOfBirth"
                    id="dateOfBirth"
                  />
                </Col>
              </FormGroup>
              <FormGroup>
                <Col xs={12}>
                  <Button block type="submit" disabled={isSubmitting}>
                    SAVE
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          )}
        </Formik>
      </Col>
      <Col xs={4}>
        <Row className="align-items-center justify-content-center border-left">
          <Col xs={10} className="mb-3">
            <styles.Img
              src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
              alt="Card image cap"
            />
          </Col>
          <Col xs={12}>
            <Button block>Select Image</Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

const styles = {
  Img: styled.img`
    width: 100%;
    height: 180px;
    border-radius: 100%;
  `,
};

export default FormProfile;
