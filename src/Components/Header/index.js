import "../../css/header.styles.scss";
import "../../css/shopping-bag.styles.scss";

import React, { useState } from "react";

import CheckOut from "../CheckOut";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../images/crown.svg";
import PropTypes from "prop-types";
import { auth } from "../../firebase/firebase";
import { connect } from "react-redux";
import { setCurrentUser } from "../../redux/user/user_actions";

const Header = (props) => {
  const { current_user, ischeckoutopen } = props;

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
        {current_user ? (
          <div
            className="option"
            onClick={() => {
              props.setCurrentUser(null);
              auth.signOut();
            }}
          >
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to={"/signup"}>
            SIGN UP
          </Link>
        )}
        {current_user && <div className="text-info fw-bold">{current_user.displayName}</div>}
        <CheckOut ischeckoutopen={ischeckoutopen} />
      </div>
    </div>
  );
};

Header.propTypes = {};

const mapStateToProps = ({ user: { current_user }, checkout: { ischeckoutopen } }) => ({
  current_user,
  ischeckoutopen
});
const mapDispachToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
});
export default connect(mapStateToProps, mapDispachToProps)(Header);
