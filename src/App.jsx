import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Question from "./Question"
import StartPage from "./StartPage"

function App() {
  return (
    <main className='main--container'>
      <StartPage />
    </main>
  )
}

export default App