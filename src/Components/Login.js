import React from 'react';

import { useDispatch } from 'react-redux';

import {useFormik} from 'formik';

import * as yup from 'yup';

import {asyncLoginAdmin} from '../actions/roleAction';

// Step - 1 
const initialValues = {
    email:'',
    password:''
}

// Step-3 
// Validating form
const validationSchema = yup.object({
    email:yup.string().email('invalid email format').required('Required'),
    password:yup.string().min(8).max(128).required('Required')
})

// function component
const Login = (props) => {

    // Invoke useDispatch hook
    const dispatch = useDispatch();
    
    const formik = useFormik({
        // ES6 Concise Property
        initialValues,

        // Method Step-2
        onSubmit : (values,{resetForm}) => {
            // Redirect admin to Home page
            const reDirect = () => {
                props.history.push('/home');
            }

            // dispatch an action
            dispatch(asyncLoginAdmin(values,resetForm,reDirect));
        },

        // Validation - ES6 Concise Property
        validationSchema
    })

    return (
        <>

            <h3 className='text-capitalize text-center text-dark header-three'>
                login to your account
            </h3>

            <form autoComplete='off'>

                {/* 1 */}
                <div className="form-group mb-3 px-5">

                    <input 
                        type="text" 
                        name="email"
                        placeholder='email'
                        className='form-control'
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
                <div className="form-group mb-3 px-5">

                    <input 
                        type="password" 
                        name="password"
                        placeholder='password'
                        className='form-control'
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
                        className='btn btn-success btn-md text-capitalize text-light mx-2' 
                        onClick={formik.handleSubmit}
                    >
                        login 
                    </button>

                    <button
                        type='cancel'
                        className='btn btn-secondary btn-md text-capitalize text-light' 
                    >
                        cancel 
                    </button>

                </div>

            </form>
            
        </>
    )
}

export default Login;