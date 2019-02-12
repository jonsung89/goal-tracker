import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './Landing';
import Dashboard from './Dashboard';
import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">   
          <Navbar />
          <Route exact path="/" component={ Landing } />
          <Route exact path="/dashboard" component={ Dashboard } />
        </div>
      </Router>
    );
  }
}

export default App;
