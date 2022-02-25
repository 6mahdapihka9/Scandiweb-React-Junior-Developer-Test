import { CHANGE_CURRENCY } from "../action.types";

const initialState = {
  __typename: 'Currency',
  label: "USD",
  symbol: "$"
}

export default function currency(state = initialState, action) {
  switch (action.type) {
    case CHANGE_CURRENCY: {
      const { currency } = action.payload;
      return { ...currency };
    }
    default:
      return state;
  }
}

