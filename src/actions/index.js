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

const getCurrentRateAction = currencyCode => ({
	type: GET_CURRENT_RATE,
	payload: getCurrentRate(currencyCode),
});

const getMonthlyRatesAction = (currencyCode, startDate, endDate) => ({
	type: GET_MONTHLY_RATES,
	payload: getMonthlyRates(currencyCode, startDate, endDate),
});

const getCurrencyCodesAction = () => ({
	type: GET_CURRENCY_CODES,
	payload: getCurrencyCodes(),
});

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
