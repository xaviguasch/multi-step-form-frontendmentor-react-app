import { useState } from 'react'
import './App.css'

function App() {
  const [page, setPage] = useState(0)
  return (
    <div className='App'>
      <h1>{page}</h1>
      {page > 1 && (
        <button onClick={() => setPage((prevPage) => prevPage - 1)}>Go back</button>
      )}
      <button onClick={() => setPage((prevPage) => prevPage + 1)}>Next step</button>
    </div>
  )
}

export default App
