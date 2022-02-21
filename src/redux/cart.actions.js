import {ADD_TO_CART, CHANGE_PRODUCT_AMOUNT, CHANGE_PRODUCT_ATTRIBUTE} from "./action.types";

export const changeProductAmount = (productID, attributes, amount) => ({
  type: CHANGE_PRODUCT_AMOUNT,
  payload: { productID, attributes, amount }
});

export const changeProductAttributes = (productID, previousAttributes, attributes) => ({
  type: CHANGE_PRODUCT_ATTRIBUTE,
  payload: { productID, previousAttributes, attributes }
});
