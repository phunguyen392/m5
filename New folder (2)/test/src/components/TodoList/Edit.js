import React,{useState, useEffect} from 'react'
import * as Yup from "yup";
import { Form, Field, Formik } from "formik";
import {  Link, useNavigate, useParams } from 'react-router-dom';
import Job from "../../models/Job";




const rules = Yup.object().shape(
    {
        job:Yup.string()
        .required("..."),
        status:Yup.string()
        .required("...")

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
            <h1>Edit {id} </h1>
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
                        <label htmlFor="status">Status</label><br/>
                        <Field name="status" />
                        {errors.status && touched.status ? (
                            <div>{errors.status}</div>
                        ) : null}
<br/>
                        <button className='btn btn-success' type="submit">Submit</button>
                        <Link to="/" className="btn btn-secondary" >Back</Link>

                    </Form>
                )}
            </Formik>
        </div>
    )

}



export default Edit;
