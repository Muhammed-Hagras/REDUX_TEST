import { createSlice } from "@reduxjs/toolkit";

export const initialState ={ count: 5, showCount: false};

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

    }
})


// export const counterActions = counterSlice.actions;
export const {increase, decrease} = counterSlice.actions;

export default counterSlice.reducer;  // متنساش ال default بنستوردها بأي اسم

// export const counterReducer = counterSlice.reducer;