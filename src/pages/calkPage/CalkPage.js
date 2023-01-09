import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addAction,subAction, mulAction, divideAction, inputOneAction, inputTwoAction } from '../../store/calkSlice';


function CalkPage() {
  const dispatch = useDispatch()
  const {result} = useSelector(state => state.calculatorReducer)

  const valueOne = (e) => {
    dispatch(inputOneAction(e.target.value))
  };
  const valueTwo = (e) => {
    dispatch(inputTwoAction(e.target.value))
  };

  

  const addCalk = () => {
    dispatch(addAction())
  }
  const subCalk = () => {
    dispatch(subAction())
  }
  const mulCalk = () => {
    dispatch(mulAction())
  }
  const divideCalk = () => {
    dispatch(divideAction())
  }

  return (
    <div>
    <input type="number" 
    name="input1"  
    onChange={valueOne} />
    <input type="number" 
    name="input2"  
    onChange={valueTwo}/>

      <button onClick={addCalk}>+</button>
      <button onClick={subCalk}>-</button>
      <button onClick={mulCalk}>*</button>
      <button onClick={divideCalk}>/</button>
      
      <h1>{result}</h1>
    </div>
  );
}

export default CalkPage;
