// IMPORT ACTION CONSTANTS

import {
  GET_CURRENCIES_PENDING,
  GET_CURRENCIES_FULFILLED,
  GET_CURRENCIES_REJECTED,
} from '../actions';

// INITIALIZE STATE

const initialState = {
  data: {},
  fetching: false,
  fetched: false,
  failed: false,
};

// REDUCER

const GetSupportedCurrenciesReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case GET_CURRENCIES_PENDING:
      return {
        ...state,
        data: {},
        fetching: true,
        fetched: false,
        failed: false,
      };
    case GET_CURRENCIES_FULFILLED:
      return {
        ...state,
        data: action.payload,
        fetching: false,
        fetched: true,
        failed: false,
      };
    case GET_CURRENCIES_REJECTED:
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

export default GetSupportedCurrenciesReducer;
