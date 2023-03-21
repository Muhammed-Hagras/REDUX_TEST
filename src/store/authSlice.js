import { createSlice } from "@reduxjs/toolkit";


const authSlice  = createSlice({
    name: "auth",
    initialState: {loggedIn: false},
    reducers: {
        logIn:  (state, action) => {state.loggedIn = true},
        logOut: (state, action) => {state.loggedIn = false}
    }
    
})


export const {logIn, logOut} = authSlice.actions;
export default authSlice.reducer;