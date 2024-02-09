import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "Parent Component",
    };

    this.greetParent = this.greetParent.bind(this);
    this.greetParentWithID = this.greetParentWithID.bind(this);
  }

  greetParent() {
    alert(`Hello ${this.state.parentName}`);
  }

  greetParentWithID(id) {
    alert(`Hello ${this.state.parentName}. Your Child ID is ${id}.`);
  }

  render() {
    return (
      <div>
        <h1>Parent Component</h1>
        <ChildComponent
          greetHandler={this.greetParent}
          greetHandlerWithID={this.greetParentWithID}
        />
      </div>
    );
  }
}

export default ParentComponent;
