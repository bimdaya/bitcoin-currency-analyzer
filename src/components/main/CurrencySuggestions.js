import React from 'react';
import PropTypes from 'prop-types';

class CurrencySuggestions extends React.Component {
	showCurrencyDetails = currencyCode => {
		this.props.onSelection(currencyCode);
	};

	render() {
		const resut = this.props.queryResult;
		if (Object.keys(resut).length === 0) return '';
		return (
			<div>
				{Array.from(resut).map(
					currencyCode =>
						({ currencyCode } && (
							<button
								className="suggestion-item"
								key={currencyCode.currency + 'btn'}
								onClick={() =>
									this.showCurrencyDetails(currencyCode.currency)
								}>
								<span key={currencyCode.currency}>
									{`${currencyCode.currency} - ${currencyCode.country}`}
								</span>
							</button>
						)),
				)}
			</div>
		);
	}
}

CurrencySuggestions.propTypes = {
  queryResult: PropTypes.array.isRequired,
}

export default CurrencySuggestions;
