import React from 'react';

import{useDispatch} from 'react-redux';

import {useFormik} from 'formik';

import * as yup from 'yup';

import {asyncRegisterAdmin} from '../actions/roleAction';

// Step - 1 
const initialValues = {
    username:'',
    email:'',
    password:'',
    academy:{
        name:''
    }
}

// Step-3 
// Validating form
const validationSchema = yup.object({
    username:yup.string().required('Required'),
    email:yup.string().email('invalid email format').required('Required'),
    password:yup.string().min(8).max(128).required('Required'),
    academy: yup.object({
        name: yup.string().required('academy name is required')
    })
})

// function component
const Register = () => {
    // Invoke dispatch hook
    const dispatch = useDispatch();

    const formik = useFormik({
        // ES6 Concise Property
        initialValues,

        // Method Step-2
        onSubmit : (values,{resetForm}) => {
            // Redirect admin to login page
            const reDirect = () => {
                props.history.push('/admin/login');
            }

            // dispatch an action
            dispatch(asyncRegisterAdmin(values,resetForm,reDirect));
        },

        // Validation - ES6 Concise Property
        validationSchema
    })

    return (
        <>

            <h3 className='text-capitalize text-center text-dark header-three'>
                register with us
            </h3>

            <form autoComplete='off'>

                {/* 1 */}
                <div className="form-group">

                    <input 
                        type="text" 
                        name="username"
                        placeholder='Enter username'
                        className='form-control-lg'
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />

                    {/* Conditional Rendering - Simple...if */}
                    {
                        (formik.errors.username && formik.touched.username) && <span className='text-danger'> {formik.errors.username}  </span>
                    }

                </div>

                {/* 2 */}
                <div className="form-group">

                    <input 
                        type="text" 
                        name="email"
                        placeholder='Enter email'
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

                {/* 3 */}
                <div className="form-group">

                    <input 
                        type="text" 
                        name="password"
                        placeholder='Enter password'
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

                {/* 4 */}
                <div className="form-group">

                    <input 
                        type="text" 
                        name="academy.name"
                        placeholder='Enter Academy Name'
                        className='form-control-lg'
                        value={formik.values.academy.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />

                    {/* Conditional Rendering - Simple...if */}
                    {
                        (Object.keys(formik.errors).includes('academy') && Object.keys(formik.touched).includes('academy')) && <span className='text-danger'> {formik.errors.academy.name}  </span>
                    }

                </div>

                <div className="button-group d-flex justify-content-center align-items-center">

                    <button
                        type='submit'
                        className='btn btn-success btn-md text-capitalize text-light mr-2' 
                    >
                        register 
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

export default Register;