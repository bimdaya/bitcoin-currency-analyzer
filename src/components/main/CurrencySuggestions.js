import React from 'react';



class CurrencySuggestions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: '',
      showContent: false,
      prices: null,
      currentprice: null,
    }
  }

  showCurrencyDetails = currencyCode => {
    this.props.onSelection(currencyCode);
  }

  render() {
    return (
        <div>
            {console.log(this.props.queryResults)}
      {
        Array.from(this.props.queryResults).map((item) => (
            <button key={item.currency}
                id={item.currency}
                onClick={() => this.showCurrencyDetails(item.currency)}>
          <span>
            {`${item.currency} - ${item.country}`}
          </span>
        </button>))
      }
    </div>)
  }
}

export default CurrencySuggestions;
