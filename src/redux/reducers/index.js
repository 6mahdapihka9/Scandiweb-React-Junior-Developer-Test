import { combineReducers } from "redux";
import cart from "./cart.reducer";
import currency from "./currency.reducer";
import miniCartDisplay from "./minicart.reducer";

export default combineReducers({ cart, currency, miniCartDisplay });
//todo add chosen category reducer
