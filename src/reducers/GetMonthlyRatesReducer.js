import {
  GET_MONTHLY_RATES_PENDING,
  GET_MONTHLY_RATES_FULFILLED,
  GET_MONTHLY_RATES_REJECTED,
} from '../common/constants';

const initialState = {
  data: { bpi: {} },
  fetching: false,
  fetched: false,
  failed: false,
};

/**
 * Get monthly rates state for the given currency code - reducer
 * @param {object} state initialState
 * @param {object} action action
 * @return {state}
 */
const GetMonthlyRatesReducerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MONTHLY_RATES_PENDING:
      return {
        ...state,
        data: { bpi: {} },
        fetching: true,
        fetched: false,
        failed: false,
      };
    case GET_MONTHLY_RATES_FULFILLED:
      return {
        ...state,
        data: action.payload,
        fetching: false,
        fetched: true,
        failed: false,
      };
    case GET_MONTHLY_RATES_REJECTED:
      return {
        ...state,
        data: { bpi: {} },
        fetching: false,
        fetched: false,
        failed: true,
      };
    default:
      return state;
  }
};

export default GetMonthlyRatesReducerReducer;
