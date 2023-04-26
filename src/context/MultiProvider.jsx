import { createContext, useContext, useState } from 'react'

export const MultiContext = createContext()

function MultiProvider({ children }) {
  const [currPage, setCurrPage] = useState(1)

  // Initialize all states here, PENDING

  const [personalInfoData, setPersonalInfoData] = useState({})
  const [planData, setPlanData] = useState({})
  const [addOns, setAddOns] = useState({
    online: false,
    larger: false,
    customi: false,
  })

  let globalState = {
    currPage,
    setCurrPage,
    personalInfoData,
    setPersonalInfoData,
    planData,
    setPlanData,
    addOns,
    setAddOns,
  }

  return <MultiContext.Provider value={globalState}>{children}</MultiContext.Provider>
}

export default MultiProvider
