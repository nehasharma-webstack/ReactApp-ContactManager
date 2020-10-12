import React, { Component } from "react";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
  };
  onEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };
  onPhoneChange = (e) => {
    this.setState({ phone: e.target.value });
  };
  onNameChange = (e) => {
    this.setState({ name: e.target.value });
  };
  render() {
    const { name, email, phone } = this.state;

    return (
      <div className="card mb-3">
        <div className="card-header">
          <h1>Add Contacts</h1>
          <div className="class-body">
            <form className>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={this.onEmailChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Enter Name"
                  value={name}
                  onChange={this.onNameChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  placeholder="Enter Phone number.."
                  value={phone}
                  onChange={this.onPhoneChange}
                />
              </div>
              <input
                type="submit"
                value="Add Contact"
                className="btn btn-warning"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default AddContact;
