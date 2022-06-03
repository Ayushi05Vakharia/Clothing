import React, { useState } from "react";

import { Button } from "reactstrap";
import CartItems from "../CartItems";
import PropTypes from "prop-types";
import { ReactComponent as ShoppingBagLogo } from "../../images/shoppingBag.svg";
import { connect } from "react-redux";
import { setIsCheckoutOpen } from "../../redux/CheckOut/checkout_actions";

const CheckOut = (props) => {
  const { ischeckoutopen, setIsCheckoutOpen, cartItems } = props;
  console.log("===>>>", cartItems);

  return (
    <div>
      <div className="cart-icon" onClick={() => setIsCheckoutOpen(!ischeckoutopen)}>
        <ShoppingBagLogo className="shopping-icon" />
        <span className="item-count">0</span>
      </div>

      {ischeckoutopen && (
        <div className="cart-dropdown">
          <div className="cart-items">
            <CartItems cartItems={cartItems} />
          </div>
          <Button size="md" color="dark">
            GO TO CHECKOUT
          </Button>
        </div>
      )}
    </div>
  );
};

CheckOut.propTypes = {};
const mapStateToProps = (state) => ({
  cartItems: state.checkout.cartItems
});

const mapDispachToProps = (dispatch) => ({
  setIsCheckoutOpen: (checkout) => dispatch(setIsCheckoutOpen(checkout))
});
export default connect(mapStateToProps, mapDispachToProps)(CheckOut);
