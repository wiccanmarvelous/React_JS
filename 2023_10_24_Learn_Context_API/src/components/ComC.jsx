import React from 'react'
import { Name } from '../App'

const ComC = () => {
  return (
    <>
      <Name.Consumer>
        {(name) => {
          return <h1>My name is {name.fname} {name.lName}</h1>
        }}
      </Name.Consumer>
    </>
  )
}

export default ComC
