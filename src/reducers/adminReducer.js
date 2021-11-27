const initialState = {
    isLoading: true,
    data: {}
}

// creating admin reducer
const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ADMIN_INFO': {
            return {
                ...state,
                data: {
                    ...action.payload,
                },
            };
        }

        case 'STOP_LOADING': {
            return {
                ...state,
                isLoading: !state.isLoading,
            };
        }
        default: {
            return {
                ...state,
            };
        }
    }
}

export default adminReducer;