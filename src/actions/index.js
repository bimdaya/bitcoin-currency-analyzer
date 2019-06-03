import {
	getCurrentRate,
	getMonthlyRates,
	getCurrencyCodes,
	getSuggestions,
} from '../services/BitcoinService';
import {
    GET_CURRENT_RATE,
    GET_MONTHLY_RATES,
    GET_CURRENCY_CODES,
    GET_SUGGESTIONS,
} from '../common/constants'

/**
* Action - return action for requesting current rate for a currency code
* @param {object} currencyCode currency code
* @return {object} action with action type and payload
*/
const getCurrentRateAction = currencyCode => ({
	type: GET_CURRENT_RATE,
	payload: getCurrentRate(currencyCode),
});

/**
* Action - return action for requesting monthly rates for a currency code
* @param {string} currencyCode currency code
* @param {string} startDate start date
* @param {string} endDate end date
* @return {object} action with action type and payload
*/
const getMonthlyRatesAction = (currencyCode, startDate, endDate) => ({
	type: GET_MONTHLY_RATES,
	payload: getMonthlyRates(currencyCode, startDate, endDate),
});

/**
* Action - return action for requesting currency codes
* @return {object} action with action type and payload
*/
const getCurrencyCodesAction = () => ({
	type: GET_CURRENCY_CODES,
	payload: getCurrencyCodes(),
});

/**
* Action - return action for requesting currency codes for a given query
* @param {object} currencyCodes currency code
* @param {string} query search query
* @return {object} action with action type and payload
*/
const getSuggestionsAction = (currencyCodes, query) => ({
	type: GET_SUGGESTIONS,
	payload: getSuggestions(currencyCodes, query),
});

export {
	getCurrentRateAction as getCurrentRate,
	getMonthlyRatesAction as getMonthlyRates,
	getCurrencyCodesAction as getCurrencyCodes,
	getSuggestionsAction as getSuggestions,
};
