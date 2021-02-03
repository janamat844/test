import React from 'react'
import Input from './Input'
import { useFormik } from "formik";
import * as Yup from "yup";

function Form() {
    const formik = useFormik({
        initialValues: {
          full_name: "",
          email: "",
          password: "",
          confirm_password: ""
        },
        validationSchema: Yup.object({
          
          email: Yup.string()
            .email("Invalid email format")
            .required("Required!"),
          password: Yup.string()
            .min(8, "Minimum 8 characters")
            .required("Required!"),
          
        }),
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        }
      });
    return (
            <div className="login">
            <div className="login_container">
            <h1>Sign In</h1>
            <form onSubmit={formik.handleSubmit}>
                <Input title="Email" type="email" name="email"
                    value={formik.values.email} 
                    onChange={formik.handleChange}/> 
             
                    {formik.errors.email && formik.touched.email && (
                    <p>{formik.errors.email}</p>
          )}
                <Input title="Password" type="password" name="password"
                        value={formik.values.password} onChange={formik.handleChange}/>
            
                    {formik.errors.password && formik.touched.password && (
                    <p>{formik.errors.password}</p>
          )}
                <br/>
                <button >
                    Submit
                </button>
                <hr/>
                <p>I accept term and conditions</p>
            </form>
            </div>
        </div>
    )
}

export default Form
