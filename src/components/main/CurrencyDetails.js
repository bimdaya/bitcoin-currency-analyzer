import React from 'react';
import PropTypes from 'prop-types';

class CurrencyDetails extends React.Component {
  render() {
    const { currentRate } = this.props;
    const { monthlyRates } = this.props;

    if (!currentRate.bpi || !monthlyRates) return '';

    return (
      <div className="display-rates">
        <span>
          <h3>Bitcoin Rates</h3>
        </span>
        <div>
          <p className="disclaimer">{currentRate.disclaimer}</p>
          <p className="description">Update on {currentRate.time.updated}</p>
          <div>
            <table>
              <thead>
                <tr>
                  <th>Code</th>
                  <th>Rate</th>
                  <th>Rate Float</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(currentRate.bpi).map(currencyType => (
                  <tr key={`${currentRate.bpi[currencyType].code}row`}>
                    <td>{currentRate.bpi[currencyType].code}</td>
                    <td>{currentRate.bpi[currencyType].rate}</td>
                    <td>{currentRate.bpi[currencyType].rate_float}</td>
                    <td>{currentRate.bpi[currencyType].description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Rate</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(monthlyRates).map(rate => (
                  <tr key={`${monthlyRates[rate]}row`}>
                    <td>{rate}</td>
                    <td>{monthlyRates[rate]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

CurrencyDetails.propTypes = {
  currentRate: PropTypes.object.isRequired,
  monthlyRates: PropTypes.object.isRequired,
};

export default CurrencyDetails;
