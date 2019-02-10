import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <header className="header">
        <div className="box-left">
          <div className="ico-menu">
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
          <div className="menu">MENU</div>
        </div>
        <div className="logo-header">
          <h1>Goal Tracker<span className="secondary-color">.</span></h1>
        </div>
        <div className="box-right">
          <div className="add"></div>
          <div className="add-large"><div>ADD A GOAL</div></div>
        </div>
      </header>
    )
  }
}



