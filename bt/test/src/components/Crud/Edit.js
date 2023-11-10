import React from "react";
import {Formik, Form, Field} from "formik";
import { useParams, useNavigate } from "react-router-dom";


function Edit(){
let Navigate = useNavigate();
let params = useParams();
const id = params.id;

const data = [{
    id,name,price,image
}];

const handleSubmit = (values) =>{
console.log(values);
}
return(
    <div>
        <h2>day la Edit</h2>
    </div>
);
}


export default Edit