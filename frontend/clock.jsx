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

  tick() {
    this.setState({
      date: new Date()
    });
  }


  render() {
    return (
      <div>

      </div>
    );
  }

}

export default Clock;
