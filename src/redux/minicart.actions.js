import {TOGGLE_MINI_CART, HIDE_MINI_CART} from "./action.types";

export const toggleMiniCart = () => ({
  type: TOGGLE_MINI_CART
});

export const hideMiniCart = () => ({
  type: HIDE_MINI_CART,
  payload: false
})
