import {
  GET_CURRENT_RATE_PENDING,
  GET_CURRENT_RATE_FULFILLED,
  GET_CURRENT_RATE_REJECTED,
} from '../common/constants';

const initialState = {
  data: {},
  fetching: false,
  fetched: false,
  failed: false,
};

/**
 * Get current rate details state for the given currency code - reducer
 * @param {object} state initialState
 * @param {object} action action
 * @return {state}
 */
const GetCurrentRateReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_RATE_PENDING:
      return {
        ...state,
        data: {},
        fetching: true,
        fetched: false,
        failed: false,
      };
    case GET_CURRENT_RATE_FULFILLED:
      return {
        ...state,
        data: action.payload,
        fetching: false,
        fetched: true,
        failed: false,
      };
    case GET_CURRENT_RATE_REJECTED:
      return {
        ...state,
        data: {},
        fetching: false,
        fetched: false,
        failed: true,
      };
    default:
      return state;
  }
};

export default GetCurrentRateReducer;
