import React from 'react';
import {connect} from 'react-redux';

class CurrencyDetails extends React.Component {
  render() {
      const currentPrice = this.props.currentPrice;
      const prices = this.props.prices;
      if(!this.props.showContent || !this.props.currentPrice.bpi || !this.props.prices ) return('');
    return (
        <div>
              <span>
                <h3>
                    Currency Details
                </h3>
              </span>
              <div>
                  <p>{currentPrice.disclaimer}</p>
                  <p>Update on {currentPrice.time.updated}</p>
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
                      {
                       Object.keys(currentPrice.bpi).map((obj) => (
                           <tr key={currentPrice.bpi[obj].code+'row'}>
                                <td>{currentPrice.bpi[obj].code}</td>
                                <td>{currentPrice.bpi[obj].rate}</td>
                                <td>{currentPrice.bpi[obj].rate_float}</td>
                                <td>{currentPrice.bpi[obj].description}</td>
                           </tr>
                           ))
               }
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
                              {console.log('==========')}
                              {console.log(prices)}
                      {
                       Object.keys(prices).map((obj) => (
                           <tr key={prices[obj]+'row'}>
                                <td>{obj}</td>
                                <td>{prices[obj]}</td>
                           </tr>
                           ))
               }
               </tbody>
           </table>
                  </div>
              </div>
          </div>
    )
  }
}

export default CurrencyDetails;
