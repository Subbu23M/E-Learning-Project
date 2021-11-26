const initialState = {
    isLoading: true,
    data: {}
};

// creating student reducer
const studentReducer = (state = initialState, action) => {
    switch (action.type) {
        default: {
            return {
                ...state
            }
        }
    }
};

export default studentReducer;