import { createContext, useContext, useState } from 'react'

export const MultiContext = createContext()

function MultiProvider({ children }) {
  const [currPage, setCurrPage] = useState(1)

  const [personalInfoData, setPersonalInfoData] = useState({})
  const [planData, setPlanData] = useState({})

  let globalState = {
    currPage,
    setCurrPage,
    setPersonalInfoData,
    planData,
    setPlanData,
  }

  return <MultiContext.Provider value={globalState}>{children}</MultiContext.Provider>
}

export default MultiProvider
