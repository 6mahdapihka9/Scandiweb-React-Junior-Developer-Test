import {TOGGLE_MINI_CART, HIDE_MINI_CART} from "./action.types";

export const toggleMiniCartAction = () => ({
  type: TOGGLE_MINI_CART
});

export const hideMiniCartAction = () => ({
  type: HIDE_MINI_CART,
  payload: false
})
