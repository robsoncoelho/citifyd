import {
    ON_REQUEST_DATA,
    ON_LOAD_DATA_SUCCESS,
    ON_LOAD_DATA_ERROR,
} from '../actions/types';

const INITIAL_STATE = {
    data: [],
    isloading: false
};

export default function mainReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ON_REQUEST_DATA:
            return { ...state, isloading: true }
        case ON_LOAD_DATA_ERROR:
            return { ...state, data: [], isloading: false }
        case ON_LOAD_DATA_SUCCESS:
            return { ...state, data: action.payload, isloading: false }
        default:
            return state;
    }
}
