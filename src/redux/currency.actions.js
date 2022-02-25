import {CHANGE_CURRENCY} from "./action.types";

export const changeCurrencyAction = currency => ({
  type: CHANGE_CURRENCY,
  payload: { currency }
});

