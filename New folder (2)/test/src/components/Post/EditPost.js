import React,{useState, useEffect} from 'react'
import * as Yup from "yup";
import { Form, Field, Formik } from "formik";
import {  Link, useNavigate, useParams } from 'react-router-dom';
import Book from "../../models/Book";




const rules = Yup.object().shape(
    {
        title:Yup.string()
        .required("..."),
        quantity:Yup.string()
        .required("...")

    }
);
function Edit (props){
    let navigate = useNavigate();
    const params = useParams();
   
    const [id,setId] = useState(0);
    const [formData,setFormData] = useState({
        'title':'',
        'quantity':''
    });

//chay 1 lan
useEffect ( () =>{
        setId(params.id);

        Book.find(params.id).then((res)=>{
                setFormData(res.data);
        })
    },[])

    const handleSubmit = (values) => {
        let data = values;
        Book.update( params.id, data ).then( (res) => {
            alert('chỉnh sửa book thành công')
            // Chuyển hướng
            navigate("/post")
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
                        <label htmlFor="title">title</label><br/>
                        <Field name="title" />
                        {errors.title && touched.title ? (
                            <div>{errors.title}</div>
                        ) : null}
<br/>
                        <label htmlFor="quantity">quantity</label><br/>
                        <Field name="quantity" />
                        {errors.quantity && touched.quantity ? (
                            <div>{errors.quantity}</div>
                        ) : null}
<br/>
                        <button className='btn btn-success' type="submit">Save</button>
                        <Link to="/post" className="btn btn-secondary" >Back</Link>

                    </Form>
                )}
            </Formik>
        </div>
    )

}



export default Edit;
