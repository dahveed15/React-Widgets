import React from 'react';
import ReactDom from 'react-dom';

//<h1>It is {this.state.date.toLocaleTimeString()}</h1>

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
        <h1>{this.state.date.toString().substr(16, 8)}</h1>
      </div>
    );
  }

}

export default Clock;
