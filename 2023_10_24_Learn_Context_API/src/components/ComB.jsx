import React, { useContext } from 'react'
import ComC from './ComC'
import { fName, lName } from '../App'

const ComB = () => {

  const fname = useContext(fName);
  const lname = useContext(lName);

  return (
    <>
      <h1>My name is {fname} {lname} in Component B.</h1>
    </>
  )
}

export default ComB
