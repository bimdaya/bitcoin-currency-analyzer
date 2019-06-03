import {
	GET_CURRENCY_CODES_PENDING,
	GET_CURRENCY_CODES_FULFILLED,
	GET_CURRENCY_CODES_REJECTED,
} from '../common/constants';

const initialState = {
	data: [],
	fetching: false,
	fetched: false,
	failed: false,
};

const GetMonthlyRatesReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_CURRENCY_CODES_PENDING:
			return {
				...state,
				data: [],
				fetching: true,
				fetched: false,
				failed: false,
			};
		case GET_CURRENCY_CODES_FULFILLED:
			return {
				...state,
				data: action.payload,
				fetching: false,
				fetched: true,
				failed: false,
			};
		case GET_CURRENCY_CODES_REJECTED:
			return {
				...state,
				data: [],
				fetching: false,
				fetched: false,
				failed: true,
			};
		default:
			return state;
	}
};

export default GetMonthlyRatesReducer;
