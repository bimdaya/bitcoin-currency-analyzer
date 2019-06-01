// IMPORT PACKAGE REFERENCES

import { combineReducers } from 'redux';

// IMPORT REDUCERS

import GetCurrentPriceReducer from './GetCurrentPriceReducer';
import GetPricesReducer from './GetPricesReducer';
import GetSupportedCurrenciesReducer from './GetSupportedCurrenciesReducer';
import GetSuggestionsReducer from './GetSuggestionsReducer';

// EXPORT REDUCER

const AppReducer = combineReducers( {
  currentPrice: GetCurrentPriceReducer,
  prices: GetPricesReducer,
  currencyCodes: GetSupportedCurrenciesReducer,
  suggestions: GetSuggestionsReducer,
} );

export default AppReducer;
