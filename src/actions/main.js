import {
	ON_REQUEST_DATA,
	ON_LOAD_DATA_SUCCESS,
	ON_LOAD_DATA_ERROR
} from './types';

export function onRequestData(data) {
    return (dispatch, getStore) => {
    	dispatch({ type: ON_REQUEST_DATA });

    	return fetchData(data)
    		.then(([response, json]) => {
		    	if(response.status === 200) {
			    	dispatch({
			            type: ON_LOAD_DATA_SUCCESS,
			            payload: json.revenue,
			        });
				} else {
					dispatch({ type: ON_LOAD_DATA_ERROR });
			 	}
	    	})
	    	.catch(dispatch({ type: ON_LOAD_DATA_ERROR }))
    };
}

function fetchData(data) {
	// const URL = `https://70443nq7lb.execute-api.us-west-2.amazonaws.com/dev/year/${data.year}/month/${data.month}/day/${data.day}/revenue`;
  	const URL = `https://70443nq7lb.execute-api.us-west-2.amazonaws.com/dev/year/2018/month/09/day/4/revenue`;
  	return fetch(URL, { method: 'GET'})
     	.then( response => Promise.all([response, response.json()]));
}
