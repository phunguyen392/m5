import { Formik, Form, Field } from "formik";
import * as Yup from "yup"
import React, { useEffect, useState } from 'react';


const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    lastName: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    email: Yup.string()
        .email("Invalid email")
        .required("Required")
});

const ValidationSchema = () => {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: ""
    })
    return (
        <div>
            <h1>Signup</h1>
            <Formik
                initialValues={form}
                validationSchema={SignupSchema}
                onSubmit={values => {
                    // same shape as initial values
                    console.log(values);
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <label htmlFor="firstName">First Name</label>
                        <Field name="firstName" />
                        {errors.firstName && touched.firstName ? (
                            <div>{errors.firstName}</div>
                        ) : null}
                        <label htmlFor="lastName">Last Name</label>

                        <Field name="lastName" />
                        {errors.lastName && touched.lastName ? (
                            <div>{errors.lastName}</div>
                        ) : null}
                        <label htmlFor="email">Email</label>

                        <Field name="email" type="email" />
                        {errors.email && touched.email ? <div>{errors.email}</div> : null}
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
};
export default ValidationSchema