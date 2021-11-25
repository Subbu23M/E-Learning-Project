import React from 'react';

import {useFormik} from 'formik';

import * as yup from 'yup';

const Register = () => {
    return (
        <>

            <h2 className='text-capitalize text-center'>
                register with us
            </h2>

            <form>

                {/* 1 */}
                <div className="form-group">

                    <input 
                        type="text" 
                        name="username"
                        placeholder='Enter username'
                        className='form-control-sm'
                    />

                </div>

                {/* 2 */}
                <div className="form-group">

                    <input 
                        type="text" 
                        name="email"
                        placeholder='Enter email'
                        className='form-control-sm'
                    />

                </div>

                {/* 3 */}
                <div className="form-group">

                    <input 
                        type="text" 
                        name="password"
                        placeholder='Enter password'
                        className='form-control-sm'
                    />

                </div>

                <div className="btn-group d-flex justify-content-around align-items-center">

                    <button
                        type='submit'
                        className='btn btn-success btn-md text-capitalize text-light' 
                    >
                        register 
                    </button>

                    <button
                        type='submit'
                        className='btn btn-secondary btn-md text-capitalize text-light' 
                    >
                        register 
                    </button>

                </div>

            </form>
            
        </>
    )
}

export default Register;