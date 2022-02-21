import { TOGGLE_MINI_CART } from "../action.types";

export default function miniCartDisplay(state = false, action) {
  switch (action.type) {
    case TOGGLE_MINI_CART: {
      return !state;
    }
    default:
      return state;
  }
}

