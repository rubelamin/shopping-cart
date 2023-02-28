import { combineReducers } from "redux";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
  productsarray: productReducer,
});

export default rootReducer;
