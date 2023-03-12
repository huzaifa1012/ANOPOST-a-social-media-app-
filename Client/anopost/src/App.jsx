import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from "axios"
function App() {
  return (
    <div className="App">
      <button onClick={async () => {
        let data = await axios.get("http://localhost:3000/first")
        console.log(data.data)
      }}>
        Click To Get Data
      </button>
    </div>
  )
}

export default App
