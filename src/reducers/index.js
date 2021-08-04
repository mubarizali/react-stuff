import { combineReducers } from "redux";
import counterSlice from "./counterSlice";

export default combineReducers(
  {
    value:counterSlice
  }
)