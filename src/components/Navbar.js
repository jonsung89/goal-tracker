import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <header className="header">
        <div className="box-left">
          <div className="ico-menu">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <div className="item">MENU</div>
        </div>
        <div className="logo-header">
          <h1>Goal Tracker<span className="secondary-color">.</span></h1>
        </div>
        <div className="box-right"></div>
      </header>
    )
  }
}



