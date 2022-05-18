import "./clothingHeader.css";

import { ReactComponent as Logo } from "./assets/crown.svg";
import PropTypes from "prop-types";
import React from "react";

export const ClothingHeader = ({ displayName }) => {
  return (
    <div className="header ">
      <div to={"/"}>
        <Logo />
      </div>
      <div className="options">
        <div className="option" to={"/shop"}>
          SHOP
        </div>
        <div className="option" to={"/shop"}>
          CONTACTS
        </div>
        {/* {curentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <div className="option" to={"/signup"}>
            SIGN UP
          </div>
        )} */}
        <div className="text-info">{displayName}</div>
      </div>
    </div>
  );
};

ClothingHeader.propTypes = {
  displayName: PropTypes.string.isRequired
};

// export default ClothingHeader;
