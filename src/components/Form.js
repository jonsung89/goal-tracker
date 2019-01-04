import React, { Component } from 'react'

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goal: ''  
    }
  }

  handleChange(e) {
    this.setState({
      goal: e.target.value
    })

  }

  onChangeGoal(e) {
    e.preventDefault();
    if (this.state.goal) {
      this.props.triggerUpdate(this.state.goal);
      this.refs.input.value='';
    } else {
      console.log('nothing submitted');
    }

  }

  render() {
    return (
      <form className="goal-form">
        <label>
          Goal:
          <input 
            type="text" 
            name="goal" 
            placeholder="Read 20 books this year..." 
            value={this.state.value}
            onChange={(e) => this.handleChange(e)}
            ref="input"
            />
        </label>
        <button onClick={(e) => this.onChangeGoal(e)}>Submit</button>
      </form>
    )
  }
}
