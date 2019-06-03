import { GET_SUGGESTIONS } from '../common/constants';

const initialState = {
	data: [],
};

/**
* Get currency code suggestion list state for the given query - reducer
* @param {object} state initialState
* @param {object} action action
* @return {state}
*/
const GetSuggestionsReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_SUGGESTIONS:
			return {
				...state,
				data: action.payload,
			};
		default:
			return state;
	}
};

export default GetSuggestionsReducer;
