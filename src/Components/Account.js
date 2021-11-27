import React from 'react';

import { useSelector } from 'react-redux';

import Loader from '../Loader';

const Account = () => {
     // To read state within the component
    const store = useSelector((state) => {
        return state.adminRole;
    }) 
    // console.log('hello');
    // console.log(store);
    // console.log(store.isLoading);
    // console.log(store.data);

    return (
        <>

            <h3 className='text-warning text-capitalize text-center'>
                admin account
            </h3>

            {/* Conditional Rendering - Ternary Operator */}
            {
                (store.isLoading) ? <Loader/> :
                        <article>

                            <p className='text-dark mx-2 lead'>
                                Admin-Username :<span className='text-success'> {store.data.username} </span>  <br /> 
                                Admin-Email :<span className='text-success'> {store.data.email} </span>   <br />
                                Admin-Role : <span className='text-success'> {store.data.role} </span>  <br /> 
                                Academy-Name : <span className='text-success'> {store.data.academy.name} </span> 
                            </p>
                        </article>
            }            
        </>
    )
}

export default Account;