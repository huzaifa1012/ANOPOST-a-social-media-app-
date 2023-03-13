
import './App.css'
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Hero, Post } from './component/main page/body';
import { BrowserRouter } from 'react-router-dom';
import AuthPage from './component/AuthPage.jsx';
import MyRoutes from './routing/routes';
function App() {
  return (
    <MyRoutes />
  )
}

export default App
