import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  const { title } = props;
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark text-white">
        {title}
        <div className="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/add-contact">
                Add Contact
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about/:id">
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

Header.defaultProps = {
  title: "My Default title",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
