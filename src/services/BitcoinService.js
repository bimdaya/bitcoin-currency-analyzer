// IMPORT PACKAGE REFERENCES

import axios from 'axios';

// INITIALIZATION

const API = 'https://api.coindesk.com/v1/bpi/';

// SERVICES

export const getCurrentPrice = (currencyCode) =>{
  return axios
    .get( `https://api.coindesk.com/v1/bpi/currentprice/${currencyCode}.json`, {} )
    .then( response => response.data, error => error.response.status );
}

export const getSupportedCurrencies = () =>{
  return axios
    .get( `https://api.coindesk.com/v1/bpi/supported-currencies.json`, {} )
    .then( response => response.data, error => error.response.status );
    // .then(
    //     result => result.map(a => a.currency)
    //     //result.reduce((a, b) => Object.assign(b), {})
    // );
}

export const getPrices = ( currencyCode, startDate, endDate ) => {
  return axios
    .get( `${ API }historical/close.json?currency=${currencyCode}&start=${ startDate }&end=${ endDate }`, {} )
    .then( response => response.data, error => error.response.status );
  // fetch(`https://api.coindesk.com/v1/bpi/supported-currencies.json`, { mode: 'no-cors'})
  //   .then( response => response.data)
  //   .catch(error => error.response.status )
}

export const getSuggestions = (currencyCodes, query) => {
  return Array.from(currencyCodes).filter((codeObj) => {
    const regex = new RegExp('^' + query, 'i');
    if (regex.test(codeObj.currency)) {
      return true;
    }
    return false;
  });
}
