import React from 'react'
import ReactDOM from 'react-dom/client'
import store from './store/store'
import { Provider } from 'react-redux'
import MyRout from '../src/routing/routes'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <MyRout />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
