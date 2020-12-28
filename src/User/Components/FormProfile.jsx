import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import { Row, Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Formik, Field } from "formik";
import * as Yup from "yup";

//Actions
import accountActions from '../Redux/actions/account';

const FormProfile = () => {
  const { REACT_APP_API_URL } = process.env;
  const auth = useSelector((state) => state.auth);
  const { data } = useSelector((state) => state.account);
  const dispatch = useDispatch();

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

  // Create a reference to the hidden file input element
  const hiddenFileInput = React.useRef(null);

  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  }; // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file
  const handleChange = async (event) => {
    const fileUploaded = event.target.files[0];
    console.log(fileUploaded);
    if (!fileUploaded) {
      console.log('Please select image.');
    } else if (!fileUploaded.name.match(/\.(jpg|jpeg|png|gif)$/)) {
      console.log('Please select valid image.');
    } else if (fileUploaded.size > 2 * 1024 * 1024) {
      console.log('Gagal pilih gambar!', 'File gambar harus kurang dari 2MB');
    } else {
      const imageData = new FormData();
      imageData.append('picture', fileUploaded);
      console.log(imageData);
      await dispatch(
        accountActions.updateAccountImage(auth.token, imageData),
      );
      dispatch(accountActions.getAccount(auth.token));
    };
  };

  return (
    <Row>
      <Col xs={8}>
        <Formik
          initialValues={{
            name: data.name || '',
            email: data.email || '',
            phoneNumber: data.phone || '',
            gender: data.gender || "male",
            dateOfBirth: data.dateOfBirth || "",
          }}
          validationSchema={validationSchema}
          onSubmit={async (values) => {
            const data = {
              name: values.name,
              email: values.email,
              phone: values.phoneNumber,
              gender: values.gender,
              dateOfBirth: values.dateOfBirth,
            };
            console.log(data);
            await dispatch(
              accountActions.updateAccount(auth.token, data),
            );
            dispatch(accountActions.getAccount(auth.token));
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
                    {errors.phoneNumber && touched.phoneNumber
                      ? errors.phoneNumber
                      : null}
                  </h6>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="gender" sm={3} className="text-muted">
                  Gender
                </Label>
                <Col>
                  <Field type="radio" name="gender" value="male" /> Male
                </Col>
                <Col>
                  <Field type="radio" name="gender" value="female" /> Female
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
                <Col xs={12} className="p-0 m-0">
                  <Button
                    block
                    color="warning"
                    className="font-weight-bold text-white"
                    type="submit"
                    disabled={isSubmitting}
                  >
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
              src={data.picture ? REACT_APP_API_URL + '/' + data.picture : require("../Assets/Images/PrimaryImage.png")}
              alt="Card image cap"
            />
          </Col>
          <Col xs={12}>
            <Button
              block
              outline
              color="warning"
              className="font-weight-bold"
              onClick={handleClick}
            >
              Select Image
            </Button>
            <input
                type="file"
                className="w-100 h-100 invisible"
                ref={hiddenFileInput}
                onChange={handleChange}
              />
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
