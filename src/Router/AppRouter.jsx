import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from '../Pages/Login'
import Home from '../Pages/Home'
import Services from '../Pages/Services'
import Contact from '../Pages/Contact'
import About from '../Pages/About'


function AppRouter() {
  return (
    <div>
    <Router>
    <Routes>
      <Route path='/' element ={<Home />} />
      <Route path='/Login' element ={<Login />} />
      <Route path='/Contact' element ={<Contact />} />
      <Route path='/Services' element ={<Services />} />
      <Route path='/About' element ={<About />} />
    </Routes>
    </Router>
    </div>
  )
}

export default AppRouter
