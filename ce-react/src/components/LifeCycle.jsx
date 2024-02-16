import React, { Component } from "react";

class LifeCycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Ifeanyi",
    };
    console.log("LifeCycleA constructor");
  }

  changeState = () => {
    this.setState({
      name: "Bob",
    });
  };

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleA getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifecycleA componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("LifecycleA shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifecycleA getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("LifecycleA componentDidUpdate");
  }

  render() {
    console.log("LifecycleA render");
    return (
      <div>
        <h1>Lifecycle A</h1>
        <button onClick={this.changeState}>Change State</button>
      </div>
    );
  }
}

export default LifeCycle;
