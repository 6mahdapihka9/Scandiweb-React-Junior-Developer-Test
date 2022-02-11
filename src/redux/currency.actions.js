import {CHANGE_CURRENCY} from "./action.types";

export const changeCurrency = currency => ({
  type: CHANGE_CURRENCY,
  payload: { currency }
});

