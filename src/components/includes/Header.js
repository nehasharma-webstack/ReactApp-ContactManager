import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = (props) => {
  const { title } = props;
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark text-white">
        {title}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
        </ul>
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
