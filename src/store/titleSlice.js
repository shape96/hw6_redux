import { createSlice } from "@reduxjs/toolkit";




const titleSlice = createSlice({
    name: "titleSlice",
    initialState: {
        title: "old title",
        inputValue: ""
    },
    reducers: {
        changeTitle: (state, action) => {
            state.title = "new title"
        },
        changeTitleWithParams: (state, action)=>{
            state.title = action.payload
            state.inputValue = ""
        },
        changeInputAction: (state, action) => {
            state.inputValue = action.payload
        },
        clearInputValue: (state) => {
           state.inputValue = ""
        },
        deleteTitleAction: (state) => {
           state.title = ""
        }
    }
})


export const {changeTitle, changeTitleWithParams, changeInputAction, clearInputValue, deleteTitleAction} = titleSlice.actions;

export default titleSlice.reducer;