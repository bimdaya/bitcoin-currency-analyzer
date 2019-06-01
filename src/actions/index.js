import {
  getCurrentPrice,
  getPrices,
  getSupportedCurrencies,
  getSuggestions,
} from '../services/BitcoinService';

export const GET_CURRENT_PRICE = 'GET_CURRENT_PRICE';
export const GET_CURRENT_PRICE_PENDING = 'GET_CURRENT_PRICE_PENDING';
export const GET_CURRENT_PRICE_FULFILLED = 'GET_CURRENT_PRICE_FULFILLED';
export const GET_CURRENT_PRICE_REJECTED = 'GET_CURRENT_PRICE_REJECTED';

const getCurrentPriceAction = currencyCode => ( {
  type: GET_CURRENT_PRICE,
  payload: getCurrentPrice( currencyCode ),
} );

export const GET_PRICES = 'GET_PRICES';
export const GET_PRICES_PENDING = 'GET_PRICES_PENDING';
export const GET_PRICES_FULFILLED = 'GET_PRICES_FULFILLED';
export const GET_PRICES_REJECTED = 'GET_PRICES_REJECTED';

const getPricesAction = ( currencyCode, startDate, endDate ) => ( {
  type: GET_PRICES,
  payload: getPrices( currencyCode, startDate, endDate ),
} );


export const GET_CURRENCIES = 'GET_CURRENCIES';
export const GET_CURRENCIES_PENDING = 'GET_CURRENCIES_PENDING';
export const GET_CURRENCIES_FULFILLED = 'GET_CURRENCIES_FULFILLED';
export const GET_CURRENCIES_REJECTED = 'GET_CURRENCIES_REJECTED';

// ACTIONS GENERATORS

const getCurrencyCodesAction = () => ( {
  type: GET_CURRENCIES,
  payload: getSupportedCurrencies(),
} );

export const GET_SUGGESTIONS = 'GET_SUGGESTIONS';
export const GET_SUGGESTIONS_PENDING = 'GET_SUGGESTIONS_PENDING';
export const GET_SUGGESTIONS_FULFILLED = 'GET_SUGGESTIONS_FULFILLED';
export const GET_SUGGESTIONS_REJECTED = 'GET_SUGGESTIONS_REJECTED';

const getSuggestionsAction = ( currencyCodes, query ) => ( {
  type: GET_SUGGESTIONS,
  payload: getSuggestions( currencyCodes, query ),
} );
// EXPORT ACTIONS

export {
  getCurrentPriceAction as getCurrentPrice,
  getPricesAction as getPrices,
  getCurrencyCodesAction as getCurrencyCodes,
  getSuggestionsAction as getSuggestions,
};
