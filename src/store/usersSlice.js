import { createSlice } from "@reduxjs/toolkit";



const usersSlice = createSlice({
    name: "usersSlice",
    initialState:{
    users: [],
    inputValue: "",
},
reducers: {
    changeInput: (state, action) => {
        state.inputValue = action.payload
    },
    addUser: (state, action) => {
        state.users = [...state.users, action.payload]
        state.inputValue = ""
    },
    clearInput: (state) => {
        state.inputValue = ""
    },
    deleteAllAction: (state) => {
        state.users = [...state.users=[]]
    }
}
})

export const { changeInput, addUser, clearInput, deleteAllAction} = usersSlice.actions;

export default usersSlice.reducer