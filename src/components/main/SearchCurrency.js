import React from 'react';
class SearchCurrency extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currency: ''
    }
  }

  changeValue = (value) => {
      this.props.onChangeVale(value);
  }

clearAll = () => {
    this.props.onclear()
}


  render() {
    return (<div>
      <input type='search' id='searchCurrencyCode' size="40"
          value={this.props.currency}
        onChange={e => this.changeValue(e)}
        placeholder="Type a currency"/>
      <button onClick={() => {
        this.clearAll()
      }}>Clear All</button>
    </div >);
  }

}

export default SearchCurrency;
