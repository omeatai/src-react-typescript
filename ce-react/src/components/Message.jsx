import React, { Component } from "react";

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      message: "Welcome Visitor!",
      isSubscribed: "false",
    };
  }

  changeMessage() {
    this.setState(
      (prev) => {
        return { ...prev, isSubscribed: !prev.isSubscribed };
      },
      () => {
        console.log("isSubscribed: ", this.state.isSubscribed);
      }
    );
  }

  render() {
    const { isSubscribed, message, name } = this.state;

    return (
      <div>
        <h1>{isSubscribed ? `Welcome ${name}` : message}</h1>
        <button
          onClick={() => this.changeMessage()}
          style={{ padding: "4px 8px", borderRadius: "50px" }}
        >
          {isSubscribed ? "Logout" : "Subscribe"}
        </button>
      </div>
    );
  }
}

export default Message;
