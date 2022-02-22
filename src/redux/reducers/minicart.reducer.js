import {HIDE_MINI_CART, TOGGLE_MINI_CART} from "../action.types";

export default function miniCartDisplay(state = false, action) {
  switch (action.type) {
    case TOGGLE_MINI_CART: {
      return !state;
    }
    case HIDE_MINI_CART: {
      return action.payload;
    }
    default:
      return state;
  }
}

