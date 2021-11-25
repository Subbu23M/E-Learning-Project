import React from 'react';

import spinner from './assets/Spinner.gif';

const Loader = (props) => {

    return (
        <>

            <img 
                src={spinner} 
                alt="spinner" 
            />

        </>
    )
}

export default Loader;