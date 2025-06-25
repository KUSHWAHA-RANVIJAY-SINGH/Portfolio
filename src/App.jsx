import { Toaster } from 'react-hot-toast'
import './App.css'
import About from './components/About/About'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Certificate from './components/Certificate'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-100 dark:bg-[#232323] transition-colors duration-300">
        <Navbar/>
        <Home/>
        <About/>
        <Project/>
        <Certificate/>
        <Contact  />
        <Footer/>
      </div>
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: 'var(--toast-bg)',
            color: 'var(--toast-color)',
          },
        }}
      />
    </ThemeProvider>
  )
}

export default App
