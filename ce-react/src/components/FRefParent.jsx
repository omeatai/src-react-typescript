import React, { Component } from "react";
import FRefChild from "./FRefChild";

class FRefParent extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {};
  }

  clickHandler = () => {
    this.inputRef.current.focus();
  };

  render() {
    return (
      <div>
        <FRefChild ref={this.inputRef} />
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    );
  }
}

export default FRefParent;
