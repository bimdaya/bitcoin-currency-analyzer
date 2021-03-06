import {
  GET_CURRENCY_CODES_PENDING,
  GET_CURRENCY_CODES_FULFILLED,
  GET_CURRENCY_CODES_REJECTED,
} from '../common/constants';
import curencyCodes from '../common/supported-currencies'

const initialState = {
  data: [],
  fetching: false,
  fetched: false,
  failed: false,
};

/**
 * Get currency codes state - reducer
 * @param {object} state initialState
 * @param {object} action action
 * @return {state}
 */
const getCurrencyCodesReducer = (state = initialState, action) => {
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
      console.warn('Retriving Currency Codes from supported-currencies.json');
      return {
        ...state,
        data: curencyCodes,
        fetching: false,
        fetched: false,
        failed: true,
      };
    default:
      return state;
  }
};

export default getCurrencyCodesReducer;
