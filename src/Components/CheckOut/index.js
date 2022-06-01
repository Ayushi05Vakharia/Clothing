import React, { useState } from "react";

import { Button } from "reactstrap";
import PropTypes from "prop-types";
import { ReactComponent as ShoppingBagLogo } from "../../images/shoppingBag.svg";
import { connect } from "react-redux";
import { setIsCheckoutOpen } from "../../redux/CheckOut/checkout_actions";

const CheckOut = (props) => {
  const { ischeckoutopen, setIsCheckoutOpen } = props;
  console.log("======>>>>>", ischeckoutopen);
  return (
    <div>
      <div className="cart-icon" onClick={() => setIsCheckoutOpen(!ischeckoutopen)}>
        <ShoppingBagLogo className="shopping-icon" />
        <span className="item-count">0</span>
      </div>

      {ischeckoutopen && (
        <div className="cart-dropdown">
          <div className="cart-items" />
          <Button size="md" color="dark">
            GO TO CHECKOUT
          </Button>
        </div>
      )}
    </div>
  );
};

CheckOut.propTypes = {};

const mapDispachToProps = (dispatch) => ({
  setIsCheckoutOpen: (checkout) => dispatch(setIsCheckoutOpen(checkout))
});
export default connect(null, mapDispachToProps)(CheckOut);
