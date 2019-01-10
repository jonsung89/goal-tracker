import React, { Component } from 'react'
import Form from './Form'

export default class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      // goals: ['Read 30 books this year']
      goals: []
    }
  }

  updateGoals(goal) {
    // console.log('goal is: ', goal);
    if (this.state.goals === null) {
      this.setState({
        goals: goal
      })  
    } else {
      this.setState({
        goals: [...this.state.goals, goal]
      })
    }
  }

  render() {
    const {goals} = this.state;

    let dashboardContent;

    if (goals.length > 0) {
      const listGoal = goals.map((goal, i) => {
        return (
          <div className="goal-box" key={i}>{goal}</div>
        )
      })
      dashboardContent = (
        <div className="goal-list">
          <div className="my-goals">
            <span>MY GOALS<div className="bottom-border"></div></span>
          </div>
          {listGoal}
        </div>
      )
    } else {
      dashboardContent = (
        <div className="goal-list">
          <div className="my-goals">
            <span>MY GOALS<div className="bottom-border"></div></span>
          </div>
          <p>No Goals</p>
        </div>
      )
    }

    return (
      <div className="dashboard">
        <div className="form">
          <h3>What would you like to accomplish?</h3>
          <Form triggerUpdate={(e) => this.updateGoals(e)} />
        </div>
        {dashboardContent}
      </div>
    )
  }
}
