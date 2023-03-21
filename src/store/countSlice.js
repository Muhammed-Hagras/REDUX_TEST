import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut } from "./authSlice";

export const initialState ={ count: 0, showCount: false};

// const countReducer = (state = initailState, action) => {
//     switch(action.type) {
//         case ("increase" ): 
//         return {...state, count: state.count + action.payload}

//         case ("decrease" ):
//         return {...state, count: state.count - action.payload}

//         case ("toggleCounter"):
//             return {...state, showCount: !stateshowCount}
        
//         default: state;
//     }

//     return state;
// }
 
const counterSlice =  createSlice({
    name: "counter",
    initialState,
    reducers: {
        increase: (state, action) => {state.count +=action.payload},
        decrease: (state, action) => {state.count -=action.payload}
    },
    extraReducers: {
        [logOut]:(state, action) => {
            state.count = 0
        }
    }
})


// export const counterActions = counterSlice.actions;


// export const counterReducer = counterSlice.reducer;

export const {increase, decrease} = counterSlice.actions;

export default counterSlice.reducer;  // متنساش ال default بنستوردها بأي اسم