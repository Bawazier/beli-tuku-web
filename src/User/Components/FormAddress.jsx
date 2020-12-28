import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Formik, Field } from "formik";
import * as Yup from "yup";

//Actions
import addressActions from '../Redux/actions/address';

const FormAddress = (props) => {
  const auth = useSelector((state) => state.auth);
  const address = useSelector((state) => state.address);
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    fullName: Yup.string().required(),
    address: Yup.string().required(),
    city: Yup.string().required("city is Required"),
    addressName: Yup.string().required(),
    postalCode: Yup.number().required("postalCode is Required"),
    tlp: Yup.number()
      .integer("Invalid phone number. Please try again.")
      .min(1000000000, "Invalid phone number. Please try again.")
      .max(99999999999, "Invalid phone number. Please try again.")
      .required("Phone number is Required"),
  });

  return (
    <Formik
      initialValues={{
        fullName: address.dataGet.recipientName || "",
        address: address.dataGet.address || "",
        city: address.dataGet.region || "",
        addressName: address.dataGet.name || "",
        postalCode: address.dataGet.postalCode || "",
        tlp: address.dataGet.recipientTlp || "",
        isPrimary: address.dataGet.isPrimary || false,
      }}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        const data = {
          recipientName: values.fullName || null,
          address: values.address || null,
          region: values.city || null,
          name: values.addressName || null,
          postalCode: values.postalCode || null,
          recipientTlp: values.tlp || null,
          isPrimary: values.isPrimary,
        };
        if (props.isUpdate) {
          await dispatch(
            addressActions.updateAddress(auth.token, address.dataGet.id, data)
          );
        } else {
          await dispatch(addressActions.postAddress(auth.token, data));
        }
        props.close();
        dispatch(addressActions.listAddress(auth.token));
        dispatch(addressActions.resetForm());
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
          <FormGroup>
            <Label for="addressName">
              Save address as (ex : home address, office address)
            </Label>
            <Input
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.addressName}
              className="form-control"
              required
              autoFocus
              type="text"
              name="addressName"
              id="addressName"
              placeholder="1234 Main St"
            />
            <h6 className="text-danger pt-2">
              {errors.addressName && touched.addressName
                ? errors.addressName
                : null}
            </h6>
          </FormGroup>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="fullName">Recipient’s name</Label>
                <Input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.fullName}
                  className="form-control"
                  required
                  type="text"
                  name="fullName"
                  id="fullName"
                />
                <h6 className="text-danger pt-2">
                  {errors.fullName && touched.fullName ? errors.fullName : null}
                </h6>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="tlp">Recipient's telephone number</Label>
                <Input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.tlp}
                  className="form-control"
                  required
                  type="text"
                  name="tlp"
                  id="tlp"
                />
                <h6 className="text-danger pt-2">
                  {errors.tlp && touched.tlp ? errors.tlp : null}
                </h6>
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="address">Address</Label>
                <Input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.address}
                  className="form-control"
                  required
                  type="text"
                  name="address"
                  id="address"
                />
                <h6 className="text-danger pt-2">
                  {errors.address && touched.address ? errors.address : null}
                </h6>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="postalCode">Postal code</Label>
                <Input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.postalCode}
                  className="form-control"
                  required
                  type="text"
                  name="postalCode"
                  id="postalCode"
                />
                <h6 className="text-danger pt-2">
                  {errors.postalCode && touched.postalCode
                    ? errors.postalCode
                    : null}
                </h6>
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="city">City or Subdistrict</Label>
                <Input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.city}
                  className="form-control"
                  required
                  type="text"
                  name="city"
                  id="city"
                />
                <h6 className="text-danger pt-2">
                  {errors.city && touched.city ? errors.city : null}
                </h6>
              </FormGroup>
            </Col>
          </Row>
          {props.isUpdate && (
            <FormGroup check>
              <Field
                className="mr-2"
                type="checkbox"
                name="isPrimary"
                id="isPrimary"
              />
              <Label for="exampleCheck" check>
                Make it the primary address
              </Label>
            </FormGroup>
          )}
          <Row className="align-items-center justify-content-end">
            <Col xs={2}>
              <Button
                block
                outline
                color="warning"
                onClick={() => {
                  props.close();
                  dispatch(addressActions.resetForm());
                }}
                className="font-weight-bold"
              >
                Cancel
              </Button>
            </Col>
            <Col xs={2}>
              <Button
                block
                color="warning"
                className="font-weight-bold text-white"
                type="submit"
                disabled={isSubmitting}
              >
                Save
              </Button>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
};

export default FormAddress;
