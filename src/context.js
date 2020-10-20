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
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
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
        email: "fhgj@loc.com",
      },
      {
        id: 2,
        name: "Pankaj",
        phone: "7876565454",
        email: "Jalandhar@hgjh.com",
      },
      {
        id: 3,
        name: "Namita",
        phone: "9099896889",
        email: "Delhi@gfhj.com",
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
