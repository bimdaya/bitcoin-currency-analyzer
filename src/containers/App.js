import React from 'react';

import Header from '../components/Header'
import BitcoinAnalyzer from '../components/main/BitcoinAnalyzer'

const App = ( { children } ) => (
  <main className="App">
    <Header title="Bitcoin Currency Analyzer" />
    <BitcoinAnalyzer/>
  </main>
);

export default App;
