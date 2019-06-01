// IMPORT ACTION CONSTANTS

import {
  GET_SUGGESTIONS,
} from '../actions';

// INITIALIZE STATE

const initialState = {
  data: {},
  fetching: false,
  fetched: false,
  failed: false,
};

// REDUCER

const GetSuggestionsReducer = ( state = initialState, action ) => {
    console.log(action);
  switch ( action.type ) {
    case GET_SUGGESTIONS:
      return {
        ...state,
        data: action.payload,
        fetching: false,
        fetched: true,
        failed: false,
      };
    default:
      return state;
  }
};

export default GetSuggestionsReducer;
