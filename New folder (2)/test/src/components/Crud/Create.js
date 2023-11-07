import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";

function Create(props) {
  let navigate = useNavigate();

  const initialValues = {
    name: "",
    price: "",
    image: "",
  };

  const validateForm = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Chưa nhập tên";
    }

    if (!values.price) {
      errors.price = "Chưa nhập giá";
    }

    return errors;
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  const handleBack = () => {
    // Điều hướng người dùng quay lại trang "List"
    navigate("/list");
  };

  return (
    <div>
      <h2>Create Product</h2>
      <Formik
        initialValues={initialValues}
        validate={validateForm}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="name">Name:</label>
            <br />
            <Field type="text" id="name" name="name" required />
            <ErrorMessage name="name" component="div" />
          </div>
          <div>
            <label htmlFor="price">Price:</label>
            <br />
            <Field type="number" id="price" name="price" required />
            <ErrorMessage name="price" component="div" />
          </div>
          <div>
            <label htmlFor="image">Image:</label>
            <br />
            <Field type="file" id="image" name="image" />
            <ErrorMessage name="image" />
          </div>
          <button type="submit">Add</button>
          <button type="button" onClick={handleBack}>
            Back
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default Create;