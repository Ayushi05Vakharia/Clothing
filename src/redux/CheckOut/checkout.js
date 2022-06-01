const INITIAL_STATE = {
  ischeckoutopen: false
};
const checkoutReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_ISCHECKOUT_OPEN":
      return {
        ...state,
        ischeckoutopen: !state.ischeckoutopen
      };

    default:
      return state;
  }
};

export default checkoutReducer;
