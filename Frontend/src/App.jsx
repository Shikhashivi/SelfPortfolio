import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import Navbar from './Components/Navbar'
import Contact from './Components/Contact'
import Projects from './Components/Projects'
import Footer from './Components/Footer'


const App = () => {
  return (
  <>
  <BrowserRouter>
  <Navbar />
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/service" element={<Services />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/projects" element={<Projects />} />




  </Routes>
  <Footer />
  </BrowserRouter>
  </>
  )
}

export default App