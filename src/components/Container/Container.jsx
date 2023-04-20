import React, { useState } from 'react'

const Container = () => {
  const [currPage, setCurrPage] = useState(1)

  return <div>Container</div>
}

export default Container

// <h1>{currPage}</h1>
// {currPage > 1 && (
//   <button onClick={() => setCurrPage((prevPage) => prevPage - 1)}>Go back</button>
// )}
// <button onClick={() => setCurrPage((prevPage) => prevPage + 1)}>Next step</button>
