import React, { Component } from "react";

export default class Test extends Component {
  state = {
    title: "",
    body: "",
  };
  componentDidMount() {
    console.log("componentDidMount.....");

    fetch("https://jsonplaceholder.typicode.com/posts/3")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          title: data.title,
          body: data.body,
        });
      });
  }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>I am a Test Component</h1>
        <div>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
      </div>
    );
  }
}
