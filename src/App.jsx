import { useState } from 'react'
import './App.css'

function App() {
  const [currPage, setCurrPage] = useState(1)
  return (
    <div className='App'>
      <h1>{currPage}</h1>
      {currPage > 1 && (
        <button onClick={() => setCurrPage((prevPage) => prevPage - 1)}>Go back</button>
      )}
      <button onClick={() => setCurrPage((prevPage) => prevPage + 1)}>Next step</button>
    </div>
  )
}

export default App
