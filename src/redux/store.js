import { createStore } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "@redux-devtools/extension";

// const myMidd = (store) => (next) => (action) => {
//   console.log(`Store: ${JSON.stringify(store.getState())}`);
//   console.log(`Action: ${JSON.stringify(action)}`);

//   next(action);
// };

const store = createStore(rootReducer, composeWithDevTools());

export default store;
