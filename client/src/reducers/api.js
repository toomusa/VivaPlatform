import { LOAD_USER, LOAD_ERROR, UPDATE_JOURNEY, TEST_USER, LOGOUT_USER } from "../actions/apiActions/types";

const INITIAL_STATE = {
    user: {},
    error: "", 
    test: ""
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case LOAD_USER:
            return {...state, user: action.payload.data };
        case LOAD_ERROR:
            return {...state, error: action.payload };
        case UPDATE_JOURNEY:
            return {...state, user: { ...state.user, journey: action.payload }};
        case TEST_USER:
            return {...state, test: action.payload };
        case LOGOUT_USER:
            return {...state, user: action.payload };
        default:
            return state;
    }
}


