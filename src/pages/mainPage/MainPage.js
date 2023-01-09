
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeTitleWithParams, changeInputAction, clearInputValue, deleteTitleAction } from '../../store/titleSlice';

function MainPage() {
  const dispatch = useDispatch()

  const {title, inputValue} = useSelector(state => state.titleReducer)

  const withParams = () => {
    dispatch(changeTitleWithParams(inputValue))
  }
  const changeInput = (event) => {
    dispatch(changeInputAction(event.target.value))
  }
  const clearInput = () => {
    dispatch(clearInputValue())
  }
  const deleteTitle = () => {
    dispatch(deleteTitleAction())
  }
  
  return (
    <>
      <h1>{title}</h1>
      <input value={inputValue} type="text" onChange={changeInput}/>
      <button onClick={clearInput}>clear</button>
      <button onClick={withParams}>add</button>
      <button onClick={deleteTitle}>delete title</button>
    </>
  );
}

export default MainPage;
