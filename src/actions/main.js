import moment from 'moment';

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
			            payload: {...json.revenue, validationGroups: groupBy(json.revenue.validations)},
			        });
				} else {
					dispatch({ type: ON_LOAD_DATA_ERROR });
			 	}
	    	})
	    	.catch(() => dispatch({ type: ON_LOAD_DATA_ERROR }))
    };
}


function groupBy(data) {
	return data.map(function(item, index) {
		return {
			time: moment(item.createdAt).format('ha'),
			total: item.total
		}
	}).reduce(function(acc, item) {
	  	const key = item.time;
	  	acc[key] = parseFloat(acc[key]) || [];
	  	acc[key] += parseFloat(item.total);
	  	return acc;
	}, {});
}


function fetchData(data) {
	const BASE_URL = `https://70443nq7lb.execute-api.us-west-2.amazonaws.com`;

	const date = {
		day: moment(data).format('DD'),
		month: moment(data).format('MM'),
		year: moment(data).format('YYYY')
	}

	const FINAL_URL = `${BASE_URL}/dev/year/${date.year}/month/${date.month}/day/${date.day}/revenue`;

  	return fetch(FINAL_URL, { method: 'GET'}).then( response => Promise.all([response, response.json()]));
}

