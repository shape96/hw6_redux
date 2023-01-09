import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, changeInput,clearInput, deleteAllAction } from '../../store/usersSlice';
import  User  from "../../components/users/User"

function UsersPage() {
  const dispatch = useDispatch()

  const {inputValue, users} = useSelector(state => state.usersReducer)
  const changeInputFunc = (event) => {
    dispatch(changeInput(event.target.value))
  }

  const addUserFunc = () => {
    dispatch(addUser(inputValue))
  }
  const deleteAll = () => {
    dispatch(deleteAllAction())
  }


  return (
    <>
  
      <input value={inputValue} type="text" placeholder='name'onChange={changeInputFunc}/>
      <button onClick={addUserFunc}>add user</button>
      <button onClick={() => dispatch(clearInput())}>clear</button>
      <button onClick={deleteAll}>delete all</button>
      {users.map(user => <User name={user}/>)}
      
      
    </>
  );
}

export default UsersPage;
