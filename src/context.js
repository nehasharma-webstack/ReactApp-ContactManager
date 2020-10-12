import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  //type of action
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter((contact) => {
          return contact.id !== action.payload;
        }),
      };
    default:
      return this.state;
  }
};
export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Neha",
        phone: "6767878789",
        location: "Ludhiana",
      },
      {
        id: 2,
        name: "Pankaj",
        phone: "7876565454",
        location: "Jalandhar",
      },
      {
        id: 3,
        name: "Namita",
        phone: "9099896889",
        location: "Delhi",
      },
    ],
    dispatch: (action) => {
      this.setState((state) => reducer(state, action));
    },
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
