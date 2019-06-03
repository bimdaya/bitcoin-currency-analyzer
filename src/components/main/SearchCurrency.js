import React from 'react';
import PropTypes from 'prop-types';

class SearchCurrency extends React.Component {
  changeValue = (value) => {
    this.props.onChangeValue(value);
  };

  clearAll = () => {
    this.props.onClear();
  };

  render() {
    return (
      <div className="searc-box">
        <input
          id="searchCurrencyCode"
          onChange={e => this.changeValue(e)}
          placeholder="Enter a currency code..."
          type="search"
          value={this.props.searchQuery}
        />
        <button
          className="clear-btn"
          onClick={() => {
            this.clearAll();
          }}
        >
          Clear All
        </button>
      </div>
    );
  }
}

SearchCurrency.propTypes = {
  searchQuery: PropTypes.string,
  onChangeValue: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
};

SearchCurrency.defaultProps = {
  searchQuery: '',
};

export default SearchCurrency;
