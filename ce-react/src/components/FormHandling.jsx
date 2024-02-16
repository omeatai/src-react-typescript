import React, { Component } from "react";

class FormHandling extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "react",
    };
  }

  handleUsernameChange = (event) => {
    this.setState(
      {
        username: event.target.value,
      },
      () => {
        console.log(this.state.username);
      }
    );
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: "black",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form
          onSubmit={this.handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            padding: "100px",
            gap: "20px",
            maxWidth: "50%",
            backgroundColor: "#fff",
          }}
        >
          <div>
            <label>
              Username:
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleUsernameChange}
              />
            </label>
          </div>

          <div>
            <label>Comments:</label>
            <textarea
              value={this.state.comments}
              onChange={(event) => {
                this.setState({ comments: event.target.value });
              }}
            ></textarea>
          </div>
          <div>
            <label>Topic</label>
            <select
              value={this.state.topic}
              onChange={(event) => this.setState({ topic: event.target.value })}
            >
              <option value="react">React</option>
              <option value="angular">Angular</option>
              <option value="vue">Vue</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default FormHandling;
