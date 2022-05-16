import "../../css/header.styles.scss";

import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../images/crown.svg";
import { ReactComponent as ProfileLogo } from "../../images//profile.svg";
import PropTypes from "prop-types";
import React from "react";
import { auth } from "../../firebase/firebase";
import { connect } from "react-redux";

const Header = (props) => {
  const { curentUser } = props;
  console.log(".............", curentUser);
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
        {curentUser && <div className="text-info fw-bold">{curentUser.displayName}</div>}
      </div>
    </div>
  );
};

Header.propTypes = {};

const mapStateToProps = (state) => ({
  curentUser: state.user.current_user
});
export default connect(mapStateToProps, null)(Header);
