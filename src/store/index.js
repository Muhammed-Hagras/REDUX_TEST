import countReducer from "./countReucer";
import { createStore } from "redux"

const store = createStore(countReducer);

export default store;