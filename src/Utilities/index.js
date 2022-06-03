export const addItemToCart = (cartItems, cartItemToAdd) => {
  const checkExistCartItem = cartItems.find((item) => item.id === cartItemToAdd.id);

  if (checkExistCartItem) {
    return cartItems.map((items) =>
      items.id === cartItemToAdd.id ? { ...items, quantity: items.quantity + 1 } : { ...items }
    );
  } else {
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  }
};
