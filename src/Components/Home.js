import React from 'react';

const Home = () => {
    return (
        <>
            <h1 className='text-capitalize text-center my-2 text-secondary'>
                home page 
            </h1>

            {/* row */}
            <div className="row">

                {/* col-1 */}
                <div className="col-lg-6 col-sm-6 padding">

                    <h2 className='text-capitalize mx-4 text-warning'>
                        go learn academy
                    </h2>

                    <p className='lead my-4 w-2 px-4'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti excepturi incidunt itaque delectus, labore perferendis tempore tempora ipsa omnis velit corporis temporibus, earum nobis quibusdam.
                    </p>

                    <button className='text-capitalize btn btn-outline-secondary btn-lg mx-4'>
                        press here
                    </button>
                    
                </div>
                {/* end of col-1 */}

                {/* col-2 */}
                <div className="col-lg-6 col-sm-6 banner">

                </div>
                {/* end of col-2 */}

            </div>
            {/* end of row */}

        </>
    )
}

export default Home;