import { addItemToCart } from "../../Utilities";

const INITIAL_STATE = {
  ischeckoutopen: false,
  cartItems: []
};
const checkoutReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_ISCHECKOUT_OPEN":
      return {
        ...state,
        ischeckoutopen: !state.ischeckoutopen
      };
    case "Add_Items":
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };

    default:
      return state;
  }
};

export default checkoutReducer;
