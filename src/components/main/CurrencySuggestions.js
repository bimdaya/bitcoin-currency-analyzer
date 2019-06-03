import React from 'react';
import PropTypes from 'prop-types';

class CurrencySuggestions extends React.Component {
  showCurrencyDetails = (currencyCode) => {
    this.props.onSelection(currencyCode);
  };

  render() {
    const result = this.props.queryResult;
    if (Object.keys(result).length === 0) return '';
    return (
      <div>
        {Array.from(result).map(
          currencyCode =>
            ({ currencyCode } && (
              <button
                className="suggestion-item"
                key={`${currencyCode.currency}btn`}
                onClick={() => this.showCurrencyDetails(currencyCode.currency)}
              >
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
  onSelection: PropTypes.func.isRequired,
};

export default CurrencySuggestions;
