import axios from 'axios';

import { COINDESK_API_BASE_URL } from '../common/constants';

/**
 * Get Bitcoin current rate for the given currency code
 * @param {string} currencyCode currency code
 * @return {object} Currenct rate details
 */
export const getCurrentRate = currencyCode =>
  axios
    .get(`${COINDESK_API_BASE_URL}currentprice/${currencyCode}.json`, {})
    .then(response => response.data)
    .catch(error => error);

/**
 * Get Bitcoin rates of supported currencies
 * @return {object} Currency codes
 */
export const getCurrencyCodes = () =>
  axios
    .get(`${COINDESK_API_BASE_URL}supported-currencies.json`, {})
    .then(response => response.data)
    .catch(error => {
      throw new Error('Error occured while retriving currency code list from CoinDesk API');
    });

/**
 * Get monthly Bitcoin rates of a given currency code
 * @param {string} currencyCode currency code
 * @param {string} startDate start date
 * @param {string} endDate end date
 * @return {object} currency rates for the month
 */
export const getMonthlyRates = (currencyCode, startDate, endDate) =>
  axios
    .get(
      `${COINDESK_API_BASE_URL}historical/close.json?
                currency=${currencyCode}&start=${startDate}&end=${endDate}`,
      {},
    )
    .then(response => response.data)
    .catch(error => error);

/**
 * Search currency codes matching to the given query
 * @param {object} currencyCodes currency code list
 * @param {string} query search query
 * @return {object} search query result
 */
export const getSuggestions = (currencyCodes, query) =>
  Array.from(currencyCodes).filter(currencyCode => {
    const regex = new RegExp(`^${query}`, 'i');
    if (regex.test(currencyCode.currency)) {
      return true;
    }
    return false;
  });
