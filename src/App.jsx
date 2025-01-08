import { Toaster } from 'react-hot-toast'
import './App.css'
import About from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar'
import PortFolio from './components/PortFolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
 

  return (
    <>
    <div>
    <Navbar/>
      <Home/>
      <About/>
      {/* <PortFolio/> */}
      <Contact  />
      <Footer/>
    </div>
    <Toaster/>
    </>
  )
}

export default App
