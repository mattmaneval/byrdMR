import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header';
import DroneBanner from './components/DroneBanner';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <DroneBanner />
      </div>
    );
  }
}

export default App;
