import React, { Component } from "react";

class LifeCycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Ifeanyi",
    };
    console.log("LifeCycleA constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleA getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifecycleA componentDidMount");
  }

  render() {
    console.log("LifecycleA render");
    return <div>Lifecycle A</div>;
  }
}

export default LifeCycle;
