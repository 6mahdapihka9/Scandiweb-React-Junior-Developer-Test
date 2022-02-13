import {ADD_TO_CART, CHANGE_PRODUCTS_ATTRIBUTE, CHANGE_PRODUCTS_AMOUNT, REMOVE_FROM_CART} from "./action.types";

export const addToCart = (product, amount) => ({
  type: ADD_TO_CART,
  payload: { product, amount }
});

export const changeProductsAmount = (id, value) => ({
  type: CHANGE_PRODUCTS_AMOUNT,
  payload: { id, value }
});

export const changeProductsAttribute = (id, attribute) => ({
  type: CHANGE_PRODUCTS_ATTRIBUTE,
  payload: { id, attribute }
});

export const removeFromCart = id => ({
  type: REMOVE_FROM_CART,
  payload: { id }
});
