import React, { Component } from 'react';
import Counter from './Counter'
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Counter />
        <Footer />
      </div>
    );
  }
}
export default App;
