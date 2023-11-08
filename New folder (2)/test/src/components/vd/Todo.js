
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
const ToDoList = () => {
  const [job, setJobs] = useState([]);
  const validationSchema = Yup.object({
    title: Yup.string().required('What`s your job?'),
    status: Yup.string().required('Select Status Please'),
  });
  const formik = useFormik({
    initialValues: {
      title: '',
      status: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const newJob = {
        title: values.title,
        status: values.status,
      };
      setJobs([...job, newJob]);
      formik.resetForm();
    },
  });
  const { values, touched, errors, handleChange, handleSubmit } = formik;
  return (
    <div className="container vh-100 d-flex align-items-center justify-content-center">
      <div className="text-center">
        <h1>ToDoList</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Job:</label>
            <input
              type="text"
              className={`form-control ${touched.title && errors.title ? 'is-invalid' : ''}`}
              name="title"
              value={values.title}
              onChange={handleChange}
            />
            {touched.title && errors.title && <div className="invalid-feedback">{errors.title}</div>}
          </div>
          <div className="mb-3">
            <label>Status:</label>
            <select
              className={`form-control ${touched.status && errors.status ? 'is-invalid' : ''}`}
              name="status"
              value={values.status}
              onChange={handleChange}
            >
              <option value="">Select Status</option>
              <option value="Nên làm">Nên</option>
              <option value="Khoan làm">Chưa</option>
            </select>
            {touched.status && errors.status && <div className="invalid-feedback">{errors.status}</div>}
          </div>
          <button type="submit" className="btn btn-primary">Add</button>
        </form>
        <table className="table mt-3">
          <thead>
            <tr>
              <th>Job</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {job.map((job, index) => (
              <tr key={index}>
                <td>{job.title}</td>
                <td>{job.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ToDoList;






