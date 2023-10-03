import React, { useState } from 'react'
import classes from './AddUser.module.css'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {

  const [userData, setUserData] = useState({ name: '', age: '' });
  const[message, setMessage] = useState('');

  const changeHandler = (data, value) => {
    setUserData((prevData) => {
      return {
        ...prevData,
        [data]: value
      }
    })
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (userData['name'].trim().length === 0 || userData['age'].trim().length === 0)
      setMessage('Please enter valid name and age (non-empty value/s).')

    else if (+userData['age'] < 0)
      setMessage('Please enter a valid age (>0>=).')
    
    if (message === '')
      props.addUsers(userData);
    setUserData({ name: '', age: '' });
  }

  const removeMessage = () => {
    setMessage('');
  }

  return (
    <div>
      {message !== '' && <ErrorModal title={'Invalid Input'} message={message} remove={removeMessage} />}
      <form className={classes.form} onSubmit={(event) => submitHandler(event)}>
        <label htmlFor="username">Username</label>
        <input onChange={(event) => changeHandler('name', event.target.value)}
          value={userData.name} type="text" name="" id="username" />

        <label htmlFor="age">Age(Years)</label>
        <input onChange={(event) => changeHandler('age', event.target.value)}
          value={userData.age} type="number" name="" id="age" />

        <Button data={'Add User'} />
      </form>
    </div>
  )
}

export default AddUser
