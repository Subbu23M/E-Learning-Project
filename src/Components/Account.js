import React from 'react';

import { useSelector } from 'react-redux';

import Loader from '../Loader';

const Account = () => {
     // To read state within the component
    const store = useSelector((state) => {
        return state.admin;
    }) 
    // console.log(store);

    return (
        <>

            <h3 className='text-warning text-capitalize text-center'>
                admin account
            </h3>

            <article>

                {/* Conditional Rendering Ternary Operator */}
                {
                    (store.isLoading) 
                    
                        ? 
                            
                            <Loader/> 
                            
                        :   <>
                        
                                <p className='text-dark ml-2 lead'>
                                    Admin-Username : {store.data.username} <br /> Admin-Email :  {store.data.email} <br />
                                    Admin-Role : {store.data.role} <br /> Academy-Name : {store.data.academy.name}
                                </p>
                            </>
                }

            </article>
            
        </>
    )
}

export default Account;