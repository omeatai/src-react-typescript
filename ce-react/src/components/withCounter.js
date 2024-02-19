import React, { Component } from "react";

const withCounter = (OriginalComponent, incrementParameter) => {
  class NewComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    incrementCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + incrementParameter };
      });
    };

    render() {
      return (
        <OriginalComponent
          name="Ifeanyi"
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props}
        />
      );
    }
  }

  return NewComponent;
};

export default withCounter;
