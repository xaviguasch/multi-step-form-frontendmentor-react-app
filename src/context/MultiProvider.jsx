import { createContext, useContext, useState } from 'react'

export const MultiContext = createContext()

function MultiProvider({ children }) {
  const [currPage, setCurrPage] = useState(1)

  const [personalInfoData, setPersonalInfoData] = useState({})

  let globalState = {
    currPage,
    setCurrPage,
    setPersonalInfoData,
  }

  return <MultiContext.Provider value={globalState}>{children}</MultiContext.Provider>
}

export default MultiProvider
