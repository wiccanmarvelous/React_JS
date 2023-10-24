import React, { createContext } from 'react'
import ComA from './components/ComA'

const Name = createContext({
  fname: "",
  lName: ""
});

const App = () => {

  const providedName = {
    fname: "Shreyash",
    lName: "Yadav"
  }

  return (
    <>
      <Name.Provider value={providedName}>
        <ComA />
      </Name.Provider>
    </>
  )
}

export default App;
export {Name};