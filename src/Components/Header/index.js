import "../../css/header.styles.scss";

import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../images/crown.svg";
import PropTypes from "prop-types";
import React from "react";
import { auth } from "../../firebase/firebase";

const Header = (props) => {
  const { curentUser } = props;
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
        {curentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to={"/signup"}>
            SIGN UP
          </Link>
        )}
      </div>
    </div>
  );
};

Header.propTypes = {};

export default Header;
