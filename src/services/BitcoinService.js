import axios from 'axios';

import { COINDESK_API_BASE_URL } from '../common/constants';

export const getCurrentRate = currencyCode =>
	axios
		.get(`${COINDESK_API_BASE_URL}currentprice/${currencyCode}.json`, {})
		.then(response => response.data)
		.catch(error => error.response.status);

export const getCurrencyCodes = () =>
	axios
		.get(`${COINDESK_API_BASE_URL}supported-currencies.json`, {})
		.then(response => response.data)
		.catch(error => error.response.status);

export const getMonthlyRates = (currencyCode, startDate, endDate) =>
	axios
		.get(
			`${COINDESK_API_BASE_URL}historical/close.json?
                currency=${currencyCode}&start=${startDate}&end=${endDate}`,
			{},
		)
		.then(response => response.data)
		.catch(error => error.response.status);

export const getSuggestions = (currencyCodes, query) =>
	Array.from(currencyCodes).filter((currencyCode) => {
		const regex = new RegExp(`^${query}`, 'i');
		if (regex.test(currencyCode.currency)) {
			return true;
		}
		return false;
	});
