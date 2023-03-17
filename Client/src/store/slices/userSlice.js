import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    value: 0
}

let userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        auth: (state, action) => {
            console.log("it's State :", state)
        },
        userData: (state, action) => {
            console.log("it's userData :", state, "hi", action.payload)
        },
        readData: (state, action) => {
            // console.log("it's userData :", state, "hi", action.payload)
        }
    }
})

export const { auth, userData, readData } = userSlice.actions
export { userSlice };