import { GET_SUGGESTIONS } from '../common/constants';

const initialState = {
	data: [],
};

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
