import { combineReducers } from "redux";
import cart from "./cart.reducer";
import currency from "./currency.reducer";

export default combineReducers({ cart, currency });
//todo add chosen category reducer
