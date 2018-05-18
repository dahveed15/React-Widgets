import React from 'react';
import ReactDom from 'react-dom';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  //once the component is rendered on the page, use setInterval to initialize
  //a new date (via tick method) every second
  componentDidMount() {
    this.TimerID = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  componentWillUnmount() {
    clearInterval(this.TimerID);
  }

  render() {
    return (
      <div>
        <h1>Time: {this.state.date.toString().substr(16, 8) + ' ' + this.state.date.toString().substr(35, 3)}</h1>
        <h1>Date: {this.state.date.toString().substr(0, 15)}</h1>
      </div>
    );
  }

}

export default Clock;
