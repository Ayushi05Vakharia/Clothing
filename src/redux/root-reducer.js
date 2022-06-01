import checkoutReducer from "./CheckOut/checkout";
import { combineReducers } from "redux";
import userReducer from "./user/user";

export default combineReducers({
  user: userReducer,
  checkout: checkoutReducer
});
