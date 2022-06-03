import "../../css/cart-items.scss";

import PropTypes from "prop-types";
import React from "react";

const CartItems = (props) => {
  const { cartItems } = props;
  return (
    <div>
      {cartItems.map(({ imageUrl, name, price, quantity }) => (
        <div className="cart-item">
          <img src={imageUrl} alt="item" />
          <div className="item-details">
            <span className="name">{name}</span>
            <span className="price">
              {quantity} X ${price}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

CartItems.propTypes = {};

export default CartItems;
