
import './App.css'
import axios from "axios"
import MainNavbar from './component/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Hero, Post} from './component/body';
function App() {
  return (
    <div className="App">
      <MainNavbar />
      <Hero />
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
