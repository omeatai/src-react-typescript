import React, { Component } from "react";

class GreetClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
    };
  }
  render() {
    return (
      <div>
        <h1>Hello {this.state.name}</h1>
        {this.props.children}
      </div>
    );
  }
}

export default GreetClass;
