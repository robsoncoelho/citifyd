import {
    TEST
} from '../actions/types';

const INITIAL_STATE = {
    test: ''
};

export default function mainReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case TEST:
            return { ...state }
        default:
            return state;
    }
}
