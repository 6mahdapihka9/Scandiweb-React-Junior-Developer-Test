import {
  ADD_PRODUCT_TO_CART,
  CHANGE_PRODUCTS_AMOUNT,
  CHANGE_PRODUCTS_ATTRIBUTE,
  REMOVE_PRODUCT_FROM_CART
} from "../action.types";
import {v4} from 'uuid';

export default function cart(state = [], action) {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART: {
      const {productID, attributes} = action.payload;
      return [
        ...state,
        {
          id: v4(),
          amount: 1,
          productID,
          attributes
        }
      ]
    }
    case CHANGE_PRODUCTS_AMOUNT: {
      const {id, amount} = action.payload;
      return state.map(
          p => p.id === id ?
              {
                ...p,
                amount: p.amount + amount
              }:
              p
      )
    }
    case CHANGE_PRODUCTS_ATTRIBUTE: {
      const {id, attributeName, attributeValue} = action.payload;
      return state.map(
          p => p.id === id ?
              {
                ...p,
                attributes: {
                  ...p.attributes,
                  [attributeName]: attributeValue
                }
              } :
              p
      )
    }
    case REMOVE_PRODUCT_FROM_CART: {
      const {id} = action.payload;
      return state.filter(p => p.id !== id)
    }
    default:
      return state;
  }
}

