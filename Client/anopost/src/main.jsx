import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import MyRout from '../src/routing/routes'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <BrowserRouter>
      <MyRout/>
    </BrowserRouter>
  </React.StrictMode>,
)
