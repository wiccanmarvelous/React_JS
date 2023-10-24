import React from 'react'
import { fName, lName } from '../App'

const ComC = () => {
  return (
    <>
      <fName.Consumer>
        {(fname) => {
          return (
            <lName.Consumer>
              {(lname) => {
                return (
                  <h1>My name is {fname} {lname} in Component C.</h1>
                )
              }}
            </lName.Consumer>
          )
        }}
      </fName.Consumer>
    </>
  )
}

export default ComC
