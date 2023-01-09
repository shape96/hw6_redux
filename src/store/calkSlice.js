import { createSlice } from "@reduxjs/toolkit";

const calculatorSlice = createSlice({
  name: "calculator",
  initialState: {
    inputOne: 0,
    inputTwo: 0,
    result: 0
  },
  reducers: {

    inputOneAction(state, action) {
        state.inputOne = action.payload
    },
    inputTwoAction(state, action) {
        state.inputTwo = action.payload
    },

    addAction(state, ) {
    state.result = state.inputOne !==0 && state.inputTwo !==0 ? +state.inputOne + +state.inputTwo : alert("Заполните поле")
    },
    subAction(state, ) {
        state.result = state.inputOne !==0 && state.inputTwo !== 0 ? +state.inputOne - +state.inputTwo : alert("Заполните поле")
    },
    mulAction(state, ) {
        state.result = state.inputOne !== 0 && state.inputTwo !== 0 ? +state.inputOne * +state.inputTwo : alert("Заполните поле")
    },
    divideAction(state, ) {
        state.result = state.inputOne !== 0 && state.inputTwo !== 0 ? +state.inputOne / +state.inputTwo : alert("Заполните поле")
    }
  }
});


export const {inputOneAction,inputTwoAction , addAction, subAction, mulAction, divideAction } = calculatorSlice.actions;

export default calculatorSlice.reducer