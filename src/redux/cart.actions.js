import {ADD_TO_CART, CHANGE_PRODUCTS_ATTRIBUTE, REMOVE_FROM_CART} from "./action.types";

export const addToCart = product => ({
  type: ADD_TO_CART,
  payload: { product }
});

export const changeProductsAttribute = (id, attribute) => ({
  type: CHANGE_PRODUCTS_ATTRIBUTE,
  payload: { id, attribute }
});

export const removeFromCart = id => ({
  type: REMOVE_FROM_CART,
  payload: { id }
});
