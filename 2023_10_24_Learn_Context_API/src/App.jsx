import React, { createContext } from 'react'
import ComA from './components/ComA'

const fName = createContext();
const lName = createContext();

const App = () => {

  return (
    <>
      <fName.Provider value={"Shreyash"}>
        <lName.Provider value={"Yadav"}>
          <ComA />
        </lName.Provider>
      </fName.Provider>
    </>
  )
}

export default App;
export { fName, lName };