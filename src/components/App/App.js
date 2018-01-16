import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const App = () => (
  <div class="App">
    <div className="App-header">
      <Header />
    </div>
    <div className="App-content">here is the content</div>
    <div className="App-footer">
      <Footer />
    </div>
  </div>
);

export default App;
