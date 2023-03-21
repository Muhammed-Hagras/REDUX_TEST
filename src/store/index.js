import counterSlice from "./countSlice";
// import { createStore } from "redux"

// const store = createStore(counterSlice.reducer);

import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './countSlice.js'

const store =  configureStore({
  reducer: {
    counter: counterReducer
    // counterReducer
  }
})


export default store;