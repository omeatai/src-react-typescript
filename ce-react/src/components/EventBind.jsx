import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Welcome Visitor!",
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState((prev) => {
      return { ...prev, message: "Goodbye!" };
    });
  }

  //   clickHandler = () => {
  //     this.setState((prev) => {
  //       return { ...prev, message: "Goodbye!" };
  //     });
  //   };

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <h2>{this.state.message}</h2>
        <button
          style={{
            padding: "8px 16px",
          }}
          onClick={this.clickHandler}
        >
          Click button
        </button>
      </div>
    );
  }
}

export default EventBind;
