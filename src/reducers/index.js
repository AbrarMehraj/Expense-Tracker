/** @format */

import {combineReducers} from "redux";
import {currentUser} from "./rootReducer";
import {transactionlist} from "./rootReducer";
export default combineReducers({
  user: currentUser,
  transactionlist,
});
