import counterSlice from "./countSlice";
// import { createStore } from "redux"

// const store = createStore(counterSlice.reducer);

import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './countSlice.js'
import authReducer from "./authSlice"

const store =  configureStore({
  reducer: {
     counterReducer,
     authReducer,
  }
})


export default store;