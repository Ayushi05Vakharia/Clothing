import React from "react";
import PropTypes from "prop-types";
import "../../css/header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../images/crown.svg";

const Header = (props) => {
  return (
    <div className="header">
      <Link to={"/"}>
        <Logo />
      </Link>
      <div className="options">
        <Link className="option" to={"/shop"}>
          SHOP
        </Link>
        <Link className="option" to={"/shop"}>
          CONTACTS
        </Link>
      </div>
    </div>
  );
};

Header.propTypes = {};

export default Header;
