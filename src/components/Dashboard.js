import React, { Component } from 'react'
import Form from './Form'

export default class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      goals: ['read 30 books this year']
    }
  }

  updateGoals(goal) {
    console.log('goal is: ', goal);
    this.setState({
      goals: [...this.state.goals, goal]
    })
  }

  render() {
    const {goals} = this.state;

    const listGoal = goals.map(goal => {
      return (
        <li>{goal}</li>
      )
    })

    return (
      <div className="dashboard">
        <div className="form">
          <h3>What would you like to accomplish?</h3>
          <Form triggerUpdate={(e) => this.updateGoals(e)} />
        </div>
        <div className="goal-list">
          <ul>
            {listGoal}
          </ul>
        </div>
      </div>
    )
  }
}
