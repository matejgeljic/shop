import { CART_ADD_PRODUCT, CART_REMOVE_PRODUCT } from '../actions/types';
import { addItemToCart } from '../utils';

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_PRODUCT:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case CART_REMOVE_PRODUCT:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
