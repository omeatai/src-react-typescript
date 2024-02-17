import React, { PureComponent } from "react";

export class PureComp extends PureComponent {
  render() {
    console.log("PURE COMP RENDER");
    return <div>Pure Comp {this.props.name}</div>;
  }
}

export default PureComp;
