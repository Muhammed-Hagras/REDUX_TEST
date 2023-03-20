import counterSlice from "./countSlice";
// import { createStore } from "redux"

// const store = createStore(counterSlice.reducer);

import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './countSlice.js'

export default configureStore({
  reducer: {
    counter: counterReducer
  }
})
