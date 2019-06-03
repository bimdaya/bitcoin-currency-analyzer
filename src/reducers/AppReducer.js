import { combineReducers } from 'redux';

import getCurrentRateReducer from './GetCurrentRateReducer';
import getMonthlyRatesReducer from './GetMonthlyRatesReducer';
import getCurrencyCodesReducer from './GetCurrencyCodesReducer';
import getSuggestionsReducer from './GetSuggestionsReducer';

const AppReducer = combineReducers({
  currentRate: getCurrentRateReducer,
  monthlyRates: getMonthlyRatesReducer,
  currencyCodes: getCurrencyCodesReducer,
  suggestions: getSuggestionsReducer,
});

export default AppReducer;
