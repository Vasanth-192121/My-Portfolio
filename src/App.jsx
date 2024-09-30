import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import Avatar from './Components/Avatar/Avatar'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import MyWork from './Components/My Work/MyWork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Avatar />
      <About />
      <Services />
      <MyWork />
      <Contact />
      <Footer />
    </div>
  )
}

export default App