import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import Book from "../../models/Book";

const rules = Yup.object().shape({
  title: Yup.string()
  .required("Hãy điền tên sách...?"),
  quantity: Yup.string()
  .required("hãy điền số lượng...?"),
});

function Create(props) {
  let navigate = useNavigate();

  // Làm việc với dữ liệu
  const [formData, setFormData] = useState({
    title: "",
    quantity: "",
  });

  const handleSubmit = (values) => {
    let data = values;
    Book.store(data)
      .then((res) => {
        alert("tạo book thành công");
        // Chuyển hướng
        navigate("/Post");
      })
      .catch((res) => {
        alert("Thêm thất bại");
      });
  };
  return (
    <div className="form-control">
      <h1>Add a new Book</h1>
      <Formik
        initialValues={formData}
        validationSchema={rules}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ errors, touched }) => (
          <Form>
            <label htmlFor="title">title:</label>
            <br />
            <Field name="title" />
            {errors.title && touched.title ? <div>{errors.title}</div> : null}
            <br />
            <label htmlFor="status">quantity:</label>
            <br />
            <Field name="quantity" />
            {errors.quantity && touched.quantity ? (
              <div>{errors.quantity}</div>
            ) : null}
            <br />
            <button className="btn btn-success" type="submit">
              Add
            </button>
            <Link to="/Post" className="btn btn-secondary">
              Back
            </Link>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Create;
