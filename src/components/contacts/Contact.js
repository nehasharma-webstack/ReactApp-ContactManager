import React, { Component } from "react";
import PropTypes from "prop-types";
import "../Contact.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Consumer } from "../../context";

class Contact extends Component {
  state = {
    showContact: false,
    iconValue: false,
  };

  doSomething = (e) => {
    this.setState({ showContact: !this.state.showContact });
  };

  likeContact = (e) => {
    console.log("Liked");
    this.setState({
      iconValue: !this.state.iconValue,
    });
  };

  onDeleteContact = (id, dispatch) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  render() {
    const { id, name, phone, email } = this.props.contact;
    const { showContact, iconValue } = this.state;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;

          return (
            <div id="contact-info" className="card card-body">
              <h2>
                {name}{" "}
                <i
                  onClick={this.doSomething}
                  className="fas fa-caret-square-down"
                ></i>
                <i
                  className="fas fa-trash-alt"
                  style={{ float: "right", paddingLeft: "30px" }}
                  onClick={this.onDeleteContact.bind(this, id, dispatch)}
                ></i>
                {iconValue ? (
                  <i
                    className="fas fa-thumbs-up"
                    style={{ float: "right", color: "blue" }}
                    onClick={this.likeContact}
                  ></i>
                ) : (
                  <i
                    className="fas fa-thumbs-up"
                    style={{ float: "right", color: "gray" }}
                    onClick={this.likeContact}
                  ></i>
                )}
              </h2>

              {showContact ? (
                <ul className="list-group">
                  <li className="list-group-item">{email}</li>
                  <li className="list-group-item">{phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

// const nameStyle = {
// color: "blue",
// fontSize: "20px",
// };
//if isAvailable=true

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  // onDeleteContact: PropTypes.func.isRequired,
  // name: PropTypes.object.isRequired,

  // phone: PropTypes.string.isRequired,
};

export default Contact;
