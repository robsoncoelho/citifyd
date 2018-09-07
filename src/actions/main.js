import { TEST } from './types';

export function onTest(data) {
    return (dispatch, getStore) => {
    	console.log(data)
        dispatch({
            type: TEST,
            payload: data,
        });
    };
}
