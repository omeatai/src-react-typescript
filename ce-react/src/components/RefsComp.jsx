import React, { Component } from "react";

class RefsComp extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    //Using Callback Ref
    this.cbRef = null;
    this.setCbRef = (element) => {
      this.cbRef = element;
    };
    // this.state = {
    //   inputValue: "",
    // };
  }

  componentDidMount() {
    this.inputRef.current.focus();
    console.log(this.inputRef);
  }

  clickHandler = () => {
    alert(this.inputRef.current.value);
    if (this.cbRef) {
      console.log(
        `Welcome, ${this.inputRef.current.value}, your age is ${this.cbRef.value} years old.`
      );
      this.cbRef.value = "Thank YOU! Bye!";
    }
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "50px",
          gap: "20px",
        }}
      >
        <label htmlFor="inputValue">Register:</label>
        <input
          type="text"
          id="inputValue"
          name="inputValue"
          ref={this.inputRef}
          placeholder="Enter your name..."
        />
        <input
          type="text"
          id="inputValue2"
          name="inputValue2"
          ref={this.setCbRef}
          placeholder="Enter your age..."
        />
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default RefsComp;
