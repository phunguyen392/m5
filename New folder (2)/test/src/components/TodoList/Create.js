import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import Job from "../../models/Job";

const rules = Yup.object().shape({
    job: Yup.string()
       
        .required("Hãy điền tên công việc...?"),
    status: Yup.string()
       
        .required("Trạng thái công việc là gì...?")
});

function Create(props) {
    let navigate = useNavigate();

    // Làm việc với dữ liệu
    const [formData,setFormData] = useState({
        'job' : '',
        'status' : ''
    })


    const handleSubmit = (values) => {
        let data = values;
        Job.store( data ).then( (res) => {
            alert('Thêm thành công');
            // Chuyển hướng
            navigate("/")
        }).catch( (res) => {
            alert('Thêm thất bại')
        })
        

    }
    return (
        <div className="form-control">
            <h1>Create</h1>
            <Formik
                initialValues={formData}
                validationSchema={rules}
                onSubmit={ (values) => handleSubmit(values)  }
            >
                {({ errors, touched }) => (
                    <Form>
                        <label htmlFor="job">Job:</label><br/>
                        <Field name="job" />
                        {errors.job && touched.job ? (
                            <div>{errors.job}</div>
                        ) : null}
<br/>
                        <label htmlFor="status">Status:</label><br/>
                        <Field name="status" />
                        {errors.status && touched.status ? (
                            <div>{errors.status}</div>
                        ) : null}
<br/>
                        <button className="btn btn-success" type="submit">Submit</button>
                        <Link to="/" className="btn btn-secondary" >Back</Link>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default Create;