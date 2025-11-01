import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Tours from './pages/Tours'
import Airport from './pages/Airport'
import Gallery from './pages/Gallery'
import Faq from './pages/Faq'
import Contact from './pages/Contact'


function App() {
  const [count, setCount] = useState(0)

  return (
           <div>
                <Navbar />
              

                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/about' element={<About/>} />
                    <Route path='/tours' element={<Tours/>} />
                    <Route path='/airport-transfers' element={<Airport/>} />
                    <Route path='/gallery' element={<Gallery/>} />
                    <Route path='/faq' element={<Faq/>} />
                    <Route path='/contact' element={<Contact/>} />
                </Routes>

                  <Footer />
           </div>
  )
}

export default App
