import { CART_ADD_PRODUCT, CART_REMOVE_PRODUCT } from './types';

// export const addProductToCart = (product) => ({
//   type: CART_ADD_PRODUCT,
//   payload: product,
// });

export const addProductToCart = (product) => (dispatch, getState) => {
  dispatch({
    type: CART_ADD_PRODUCT,
    payload: product,
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const removeProductFromCart = (product) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_PRODUCT,
    payload: product,
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
