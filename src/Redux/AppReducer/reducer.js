import * as types from './actionTypes';
const initialState = {

    capsulesData: []
}

const reducer =  (oldState = initialState, action) => {

    const {type, payload} = action;

    switch (type) {
        case types.GET_CAPSULES_DATA: {
            return { 
            ...oldState,
            capsulesData: payload
            };
        }
    default:
        return oldState;
    }
}

export { reducer };