import React, { useState } from 'react'

import MultiProvider from './context/MultiProvider'

import classes from './App.module.css'

import Container from './components/Container/Container'

function App() {
  return (
    <MultiProvider>
      <div className={classes.App}>
        <Container />
      </div>
    </MultiProvider>
  )
}

export default App
