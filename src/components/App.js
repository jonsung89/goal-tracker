import React, { Component } from 'react';
import Dashboard from './Dashboard';

// import '../scss/App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1>Goal Tracker</h1>
        </header>
        <Dashboard />
      </div>
    );
  }
}

export default App;
