import React, { Component } from 'react';
import Dashboard from './Dashboard';
import Navbar from './Navbar';

// import '../scss/App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Dashboard />
      </div>
    );
  }
}

export default App;
