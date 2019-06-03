import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import { debounce } from 'throttle-debounce';

import CurrencySuggestions from './CurrencySuggestions';
import CurrencyDetails from './CurrencyDetails';
import {
	getCurrentRate,
	getMonthlyRates,
	getCurrencyCodes,
	getSuggestions,
} from '../../actions';
import SearchCurrency from './SearchCurrency';

class BitcoinAnalyzer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showSuggestions: false,
			showRates: false,
			query: '',
			currencyCode: '',
		}

		this.autoCompleteSuggestions = debounce(200, this.searchSuggestions);
		this.updateSearchQuery = this.updateSearchQuery.bind(this);
		this.clearData = this.clearData.bind(this);
		this.getCurrencyRates = this.getCurrencyRates.bind(this);
	}

	componentDidMount() {
		this.props.getCurrencyCodes();
	}

	updateSearchQuery = (searchInput) => {
		let isUpdated = false;

		if (searchInput.length > 0) {
			isUpdated = true;
		}

		this.setState({
            query: searchInput,
            showSuggestions: isUpdated
        }, () => {
			this.autoCompleteSuggestions(this.state.query);
		})
	}

	searchSuggestions = (query) => {
		this.props.getSuggestions(this.props.currencyCodes, query);
	}

	getCurrencyRates = (currencyCode) => {
		this.setState({
            query: currencyCode,
            showSuggestions: false
        })
		this.searchCurrencyRates(currencyCode);
	}

	searchCurrencyRates = (currencyCode) => {
		const startDate = moment()
			.subtract(30, 'days')
			.format('YYYY-MM-DD');
		const endDate = moment()
			.subtract(1, 'days')
			.format('YYYY-MM-DD');

		if (currencyCode) {
			this.setState({
                showRates: true,
                currencyCode: currencyCode
            }, () => {
				this.props.getMonthlyRates(
                    this.state.currencyCode,
                    startDate,
                    endDate);
				this.props.getCurrentRate(this.state.currencyCode);
			})
		}
	}

	clearData = () => {
		this.setState({
            query: '',
            showSuggestions: false,
            showRates: false
        })
	}

	render() {
		return (
			<div>
				<SearchCurrency
					onChangeValue={e => {
						this.updateSearchQuery(e.target.value)
					}}
					onClear={this.clearData}
					searchQuery={this.state.query}/>
				<div className={
						this.state.showSuggestions
							? 'suggestion-list show'
							: 'suggestion-list hide'
					}>
					<CurrencySuggestions
						onSelection={this.getCurrencyRates}
    					queryResult={this.props.suggestions}
					/>
				</div>
				<div className={this.state.showRates ? 'show' : 'hide'}>
					<CurrencyDetails
                        currentRate={this.props.currentRate}
						monthlyRates={this.props.monthlyRates}/>
				</div>
			</div>
		)
	}
}

BitcoinAnalyzer.propTypes = {
  currencyCodes: PropTypes.array.isRequired,
  currentRate: PropTypes.object.isRequired,
  monthlyRates: PropTypes.object.isRequired,
  suggestions: PropTypes.array.isRequired,
  getCurrencyCodes: PropTypes.func.isRequired,
  getMonthlyRates: PropTypes.func.isRequired,
  getCurrentRate: PropTypes.func.isRequired,
  getSuggestions: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
	const currencyCodes = state.currencyCodes.data;
	const currentRate = state.currentRate.data;
	const monthlyRates = state.monthlyRates.data.bpi;
	const suggestions = state.suggestions.data;
	return { currencyCodes, currentRate, monthlyRates, suggestions }
}

const mapDispatchToProps = dispatch => {
	return {
		getCurrencyCodes: () => dispatch(getCurrencyCodes()),
		getMonthlyRates: (currencyCode, startDate, endDate) =>
			dispatch(getMonthlyRates(currencyCode, startDate, endDate)),
		getCurrentRate: currencyCode => dispatch(getCurrentRate(currencyCode)),
		getSuggestions: (currencyCodes, query) =>
			dispatch(getSuggestions(currencyCodes, query)),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(BitcoinAnalyzer);
