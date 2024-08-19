
import './App.css'
import {BrowserRouter,Routes,Router} from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Router path = '/'  elements = { <h1>Hello Homepage</h1>} />
      <Router path = '/'  elements = {< Navbar/>} /> 
      </Routes> 
      </BrowserRouter>


      
    </>
  )
}

export default App
