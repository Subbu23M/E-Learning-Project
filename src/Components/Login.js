import React from 'react';

import {useFormik} from 'formik';

import * as yup from 'yup';

// Step - 1 
const initialValues = {
    email:'',
    password:''
}

// Step-2 
const onSubmit=(values)=>{
    console.log(values);
}

// Step-3 
// Validating form
const validationSchema = yup.object({
    email:yup.string().email('invalid email format').required('Required'),
    password:yup.string().min(8).max(128).required('Required')
})

// function component
const Login = () => {
    const formik = useFormik({
        // ES6 Concise Property
        initialValues,

        // Method
        onSubmit,

        // Validation
        validationSchema
    })

    return (
        <>

            <h3 className='text-capitalize text-center text-dark header-three'>
                login to your account
            </h3>

            <form autoComplete='off'>

                {/* 1 */}
                <div className="form-group">

                    <input 
                        type="text" 
                        name="email"
                        placeholder='email'
                        className='form-control-lg'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />

                    {/* Conditional Rendering - Simple...if */}
                    {
                        (formik.errors.email && formik.touched.email) && <span className='text-danger'> {formik.errors.email}  </span>
                    }

                </div>

                {/* 2 */}
                <div className="form-group">

                    <input 
                        type="text" 
                        name="password"
                        placeholder='password'
                        className='form-control-lg'
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />

                    {/* Conditional Rendering - Simple...if */}
                    {
                        (formik.errors.password && formik.touched.password) && <span className='text-danger'> {formik.errors.password}  </span>
                    }

                </div>

                <div className="button-group d-flex justify-content-center align-items-center">

                    <button
                        type='submit'
                        className='btn btn-success btn-md text-capitalize text-light mr-2' 
                    >
                        login 
                    </button>

                    <button
                        type='submit'
                        className='btn btn-secondary btn-md text-capitalize text-light' 
                        onClick={formik.handleSubmit}
                    >
                        cancel 
                    </button>

                </div>

            </form>
            
        </>
    )
}

export default Login;