import "../../css/collection-items.sytles.scss";

import React, { useEffect, useState } from "react";

import { Button } from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { isEmpty } from "lodash";
import { setAddItems } from "../../redux/CheckOut/checkout_actions";

// import { setAddItems } from "./";

const CollectionItems = ({ title, items, setAddItems, cartItems }) => {
  // const { cartItems } = props;
  console.log("items", items);

  return (
    <React.Fragment>
      <div className="title mt-4">{title}</div>
      <div className="preview">
        {items
          .filter((e) => e)
          .slice(0, 4)
          ?.map((hat) => (
            <div className="collection-item">
              <div className="image" style={{ backgroundImage: `url(${hat.imageUrl})` }} />

              <div className="collection-footer">
                <span>{hat.name}</span>
                <span>${hat.price}</span>
              </div>
              <Button
                size="lg"
                color="dark"
                outline
                className="custom-button inverted fw-semibold"
                onClick={() => setAddItems({ ...hat })}
              >
                Add To Cart
              </Button>
            </div>
          ))}
      </div>
    </React.Fragment>
  );
};

CollectionItems.propTypes = {};

const mapStateToProps = (state) => ({
  cartItems: state.checkout.cartItems
});
const mapDispachToProps = (dispatch) => ({
  setAddItems: (items) => dispatch(setAddItems(items))
});

export default connect(mapStateToProps, mapDispachToProps)(CollectionItems);
