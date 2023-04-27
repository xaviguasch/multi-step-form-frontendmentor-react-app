import { createContext, useContext, useState } from 'react'

export const MultiContext = createContext()

function MultiProvider({ children }) {
  const [currPage, setCurrPage] = useState(1)
  const [personalInfoData, setPersonalInfoData] = useState({})
  const [planData, setPlanData] = useState({})
  const [addOnsGlobal, setAddOnsGlobal] = useState({
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
  })

  let globalState = {
    currPage,
    setCurrPage,
    personalInfoData,
    setPersonalInfoData,
    planData,
    setPlanData,
    addOnsGlobal,
    setAddOnsGlobal,
  }

  return <MultiContext.Provider value={globalState}>{children}</MultiContext.Provider>
}

export default MultiProvider
