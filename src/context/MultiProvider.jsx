import { createContext, useContext, useState } from 'react'

export const MultiContext = createContext()

function MultiProvider({ children }) {
  const [currPage, setCurrPage] = useState('14')

  let currPageState = {
    currPage,
    setCurrPage,
  }

  return <MultiContext.Provider value={currPageState}>{children}</MultiContext.Provider>
}

export default MultiProvider
