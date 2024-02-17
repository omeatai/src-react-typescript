import React, { Component } from "react";
// import RegComp from "./RegComp";
// import PureComp from "./PureComp";
import MemoComp from "./MemoComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Ifeanyi",
    };
  }

  componentDidMount() {
    // console.log("ParentComp Component Mounted");
    setInterval(() => {
      this.setState({
        name: "Ifeanyi",
      });
    }, 2000);
  }

  render() {
    console.log("*********PARENT COMP RENDER*********");
    return (
      <div>
        <h1>Parent Component</h1>
        {/* <RegComp name={this.state.name} /> */}
        {/* <PureComp name={this.state.name} /> */}
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
