import {
  ADD_PRODUCT_TO_CART,
  CHANGE_PRODUCTS_AMOUNT,
  CHANGE_PRODUCTS_ATTRIBUTE,
  REMOVE_PRODUCT_FROM_CART
} from "./action.types";

export const addProductToCartAction = (productID, attributes, prices) => ({
  type:  ADD_PRODUCT_TO_CART,
  payload: {productID, attributes, prices}
})

export const changeProductsAmountAction = (id, amount) => ({
  type:  CHANGE_PRODUCTS_AMOUNT,
  payload: {id, amount}
})

export const changeProductsAttributeAction = (id, attributeName, attributeValue) => ({
  type:  CHANGE_PRODUCTS_ATTRIBUTE,
  payload: {id, attributeName, attributeValue}
})

export const removeProductFromCartAction = id => ({
  type:  REMOVE_PRODUCT_FROM_CART,
  payload: {id}
})
