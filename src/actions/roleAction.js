import axios from 'axios';

// creating admin registration action
export const asyncRegisterAdmin = () => {
    return () => {
        const baseUrl = 'https://dct-e-learning.herokuapp.com/api/admin/register';

        // consuming code
        axios
            .post(baseUrl)

            // success
            .then((response) => {
                const result = response.data;
                console.log(result);

                // Object.keys(result).includes('errors');

                if (result.hasOwnProperty('errors')) {
                    alert(error.message);
                } else {
                    alert('admin is registered successfully');
                }
            })

            // failure
            .catch((error) => {
                alert(error.message);
            })
    }
}

// creating admin login action
export const asyncLoginAdmin = () => {
    return ((dispatch) => {

        const baseUrl = 'https://dct-e-learning.herokuapp.com/api/admin/login';

        // consuming code
        axios
            .post(baseUrl)

            // success
            .then((response) => {
                const result = response.data;
                console.log(result);

                // Object.keys(result).includes('errors');

                if (result.hasOwnProperty('errors')) {
                    alert(error.message);
                } else {
                    alert('admin is logged in successfully');

                    // Create JWT(JSON Web Token) Property in Browser memory
                    localStorage.setItem('JWT_Token', result.token);

                    // Dispatch action to collect admin token
                    dispatch(getAdminDetails(result.token));
                }
            })

            // failure
            .catch((error) => {
                alert(error.message);
            })
    })
}

// Action to get admin personal details
export const getAdminDetails = () => {
    return (
        (dispatch) => {
            const baseUrl = 'https://dct-e-learning.herokuapp.com/api/admin/account';

            // consuming code
            axios
                .get(baseUrl, {
                    headers: {
                        'Authorization': localStorage.getItem('JWT_Token')
                    }
                })

                // success
                .then((response) => {
                    const result = response.data;

                    // dispatch action to state to store admin details
                    dispatch(setAdminInfo(result));
                    dispatch(stopLoading());
                })

                .catch((error) => {
                    alert(error.message)
                })
        }
    )
}

// action creator / generator
export const setAdminInfo = (admin) => {
    return {
        type: 'SET_ADMIN_INFO',
        payload: admin
    }
}

// action generator to stop loading
export const stopLoading = () => {
    return ({
        type: 'STOP_LOADING'
    })
}