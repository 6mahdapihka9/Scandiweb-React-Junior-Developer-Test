import { ADD_TO_CART, CHANGE_PRODUCTS_AMOUNT, CHANGE_PRODUCTS_ATTRIBUTE, REMOVE_FROM_CART } from "../action.types";
import { v4 } from 'uuid';

export default function cart(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART: {
      const { product, amount } = action.payload;
      return [
        ...state,
        {
          ...product,
          amount,
          id: v4()
        }
      ];
    }
    case CHANGE_PRODUCTS_AMOUNT: {
      const { id, value } = action.payload;
      return state.map(p => p.id !== id? p : {
        ...p,
        amount: p.amount + value
      });
    }
    case CHANGE_PRODUCTS_ATTRIBUTE: {
      const { id, attribute } = action.payload;
      return state.map(p => p.id !== id? p : {
        ...p,
        attributes: p.attributes.map(a => a.id !== attribute.id? a : attribute)
      });
    }
    case REMOVE_FROM_CART: {
      const { id } = action.payload;
      return state.filter(p => p.id !== id);
    }
    default:
      return state;
  }
}

