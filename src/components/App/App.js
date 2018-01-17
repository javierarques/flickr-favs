import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Nav from '../Nav';

const App = () => (
  <div className="App">
    <div className="App-header">
      <Header />
      <Nav />
    </div>
    <div className="App-content" />
    <div className="App-footer">
      <Footer />
    </div>
  </div>
);

export default App;
