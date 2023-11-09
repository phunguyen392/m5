import React,{useState, useEffect} from 'react'
import * as Yup from "yup";
import { Form, Field, Formik } from "formik";
import {  useNavigate, useParams } from 'react-router-dom';
import Job from "../../models/Job";




const rules = Yup.object().shape(
    {
        job:Yup.string()
        .required("..."),
        status:Yup.number()
        .required("hay nhap so")

    }
);
function Edit (props){
    let navigate = useNavigate();
    const params = useParams();
   
    const [id,setId] = useState(0);
    const [formData,setFormData] = useState({
        'job':'',
        'status':''
    });

//chay 1 lan
useEffect ( () =>{
        setId(params.id);

        Job.find(params.id).then((res)=>{
                setFormData(res.data);
        })
    },[])

    const handleSubmit = (values) => {
        let data = values;
        Job.update( params.id, data ).then( (res) => {
            alert('Thành công')
            // Chuyển hướng
            navigate("/")
        }).catch( (res) => {
            alert('Thất bại')
        })
    }

    return (
        <div>
            <h1>Edit</h1>
            <Formik
                initialValues={formData}
                validationSchema={rules}
                onSubmit={ (values) => handleSubmit(values)  }
                enableReinitialize={true}
            >
                {({ errors, touched }) => (
                    <Form>
                        <label htmlFor="job">Job</label><br/>
                        <Field name="job" />
                        {errors.job && touched.job ? (
                            <div>{errors.job}</div>
                        ) : null}
<br/>
                        <label htmlFor="status">Price1</label><br/>
                        <Field name="status" />
                        {errors.status && touched.status ? (
                            <div>{errors.status}</div>
                        ) : null}
<br/>
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )

}



export default Edit;
