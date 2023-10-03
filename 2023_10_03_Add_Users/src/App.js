import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import classes from './App.module.css';
import UsersList from './components/Users/UsersList';

function App() {

  
  const [users, setUsers] = useState([])

  const addUsers = (user) => {
    setUsers((oldUsers) => {
      return [...oldUsers, user];
    });
  }

  return (
    <div >
      <AddUser addUsers={addUsers}/>
      <UsersList usersList={users} />
    </div>
  );
}

export default App;
