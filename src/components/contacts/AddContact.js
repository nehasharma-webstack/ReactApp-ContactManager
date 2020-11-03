import React, { Component } from "react";
import { Consumer } from "../../context";
import classnames from "classnames";
import { v4 as uuid } from "uuid";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {},
    fields: {},
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const { name, phone, email } = this.state;

    if (name === "") {
      this.setState({ errors: { name: "Name cant be empty!" } });
      return;
    }

    if (email === "") {
      this.setState({ errors: { email: "Email cant be empty!" } });
      return;
    }

    if (phone === "") {
      this.setState({ errors: { phone: "Phone number cant be empty!" } });
      return;
    }

    const newContact = {
      id: uuid(),
      name,
      email,
      phone,
    };

    dispatch({ type: "ADD_CONTACT", payload: newContact });

    this.props.history.push("/");
  };

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;

          return (
            <div className="card mb-3">
              <div className="card-header">
                <h1>Add Contacts</h1>
                <div className="class-body">
                  <form>
                    <div className="form-group">
                      <label htmlFor="email">Email address</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={this.onChange}
                        className={classnames("form-control form-control-lg", {
                          "is-invalid": errors.email,
                        })}
                      />
                      {errors.email && (
                        <div className="invalid-feedback">{errors.email}</div>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Enter Name"
                        value={name}
                        onChange={this.onChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="text"
                        className="form-control"
                        name="phone"
                        placeholder="Enter Phone number.."
                        value={phone}
                        onChange={this.onChange}
                      />
                    </div>
                    <input
                      type="submit"
                      value="Add Contact"
                      className="btn btn-warning"
                      onClick={this.onSubmit.bind(this, dispatch)}
                    />
                  </form>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default AddContact;
