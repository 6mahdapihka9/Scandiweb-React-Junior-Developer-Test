import {CHANGE_PRODUCT_AMOUNT, CHANGE_PRODUCT_ATTRIBUTE} from "../action.types";
import {changeProductAmount, changeProductAttribute} from "../../helpers/cartMethods";

export default function cart(state = [], action) {
  switch (action.type) {
    case CHANGE_PRODUCT_AMOUNT: {
      const {productID, attributes, amount} = action.payload;
      return changeProductAmount(state, productID, attributes, amount);
    }
    case CHANGE_PRODUCT_ATTRIBUTE: {
      const {productID, previousAttributes, attributes} = action.payload;
      return changeProductAttribute(state, productID, previousAttributes, attributes);
    }
    default:
      return state;
  }
}

