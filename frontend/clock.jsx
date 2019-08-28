import React from 'react';

export default class Clock extends React.Component{
  constructor(props) {
    super(props);
    this.state = { date: new Date()};
    
  }

  render() {
    return (
      <div>
        <h1>Clock</h1>
        <div className="clock">
          <p>
            <span>Time:</span>
            <span>{this.state.date.toLocaleTimeString()}</span>
          </p>
          <p>
            <span>Date:</span>
            <span>{this.state.date.toDateString()}</span>
          </p>
        </div>
      </div>
    )
  }

  tick() {
    this.setState({date: new Date()})
  }

  componentDidMount() {
    setInterval(this.tick.bind(this), 500);
  }
  // componentWillUnmount() {
  // }
  
}