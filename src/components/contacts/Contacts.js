import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";

class Contacts extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Consumer>
        {(value) => {
          const { contacts } = value;
          return (
            <div>
              {contacts.map((c) => (
                <Contact key={c.id} contact={c} />
              ))}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
