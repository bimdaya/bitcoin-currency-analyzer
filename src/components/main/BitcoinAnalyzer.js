import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import moment from 'moment';
import { debounce } from "throttle-debounce";
import CurrencySuggestions from './CurrencySuggestions';
import CurrencyDetails from './CurrencyDetails';
import {getCurrentPrice, getPrices} from '../../actions';

import {getCurrencyCodes, getSuggestions} from '../../actions';
import SearchCurrency from './SearchCurrency'

class BitcoinAnalyzer extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        showAutoComp: false,
        showContent: false,
        query: '',
        currency: ''
      }

      /*
      Making a debounce logic in a way that when user makes a delay of 300ms then
      it hits the server or the local data for suggestions (this approach will minimize the
      hits to the server as per key strokes) */
     this.autocompleteCurrencySearchWithDebounce = debounce(300, this.searchSuggestions);
      this.findTypedText = this.findTypedText.bind(this);
      this.clearData = this.clearData.bind(this);
      this.clearInput = this.clearInput.bind(this);
    }

  componentDidMount() {
    this.props.getCurrencyCodes();
  }

  findTypedText = evt => {

    let bol = false;
    if (evt.target.value.length > 0) {
      bol = true;
    }

    this.setState({ query: evt.target.value, showAutoComp:bol }, () => {

       this.autocompleteCurrencySearchWithDebounce(this.state.query);

     });

  }

  searchSuggestions = (query) => {
      console.log('display');
      this.props.getSuggestions(this.props.currencyCodes, query);
      console.log('end');
  }

  clearInput = (currency) => {
    this.setState({query: currency, showAutoComp: false});
    this.findCurrencyCode(currency);
  }

  findCurrencyCode = (currencyCode) => {
    const startDate = moment().subtract(30, 'days').format('YYYY-MM-DD');
    const endDate = moment().subtract(1, 'days').format('YYYY-MM-DD');

    if (currencyCode) {

      this.setState({ showContent: true, currency: currencyCode}, () => {
          this.props.getPrices(this.state.currency, startDate, endDate);
          this.props.getCurrentPrice(this.state.currency);

           });
    }
  }

  clearData = () => {
    this.setState({query: '', showAutoComp: false, showContent: false});
  }

  render() {
    return (
        <div>
        <SearchCurrency
            onChangeVale={this.findTypedText}
            onclear={this.clearData}
            currency={this.state.query}/>
        <div className={(
            this.state.showAutoComp
            ? "queryResults show"
            : "queryResults hide")}>
          <CurrencySuggestions
              queryResults={this.props.suggestions}
              onSelection={this.clearInput}/>
        </div>
        <div className={(
            this.state.showContent
            ? "show"
            : "hide")}>
          <CurrencyDetails
              showContent={this.state.showContent}
              prices={this.props.prices}
              currentPrice={this.props.currentPrice}/>
        </div>
        </div>
    );
  }
}

BitcoinAnalyzer.propTypes = {
  currencyCodes: PropTypes.Object
};

const mapStateToProps = (state) => {
  const currencyCodes = state.currencyCodes.data;
  const currentPrice = state.currentPrice.data;
  const prices = state.prices.data.bpi;
  const suggestions = state.suggestions.data;
  return {currencyCodes, currentPrice, prices, suggestions};
};

const mapDispatchToProps = dispatch => {
  return {
    getCurrencyCodes: () => dispatch(getCurrencyCodes()),
    getPrices: (currencyCode, startDate, endDate) =>
        dispatch(getPrices(currencyCode, startDate, endDate)),
    getCurrentPrice: (currencyCode) =>
        dispatch(getCurrentPrice(currencyCode)),
    getSuggestions: (currencyCodes, query) =>
        dispatch(getSuggestions(currencyCodes, query)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(BitcoinAnalyzer);
