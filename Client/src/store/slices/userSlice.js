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
        }
    }
})

export const { auth } = userSlice.actions
export { userSlice };