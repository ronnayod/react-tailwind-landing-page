import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Aboute from './components/Aboute'
import InfoOne from './components/infoOne'
import InfoTwo from './components/InfoTwo'
import CTA from './components/CTA'
import Testimonials from './components/Testimonials'
import GetinTouch from './components/GetinTouch'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero/>
      <Aboute/>
      <InfoOne/>
      <InfoTwo/>
      <CTA/>
      <Testimonials/>
      <GetinTouch/>
      <Footer/>
    </>
  )
}

export default App
