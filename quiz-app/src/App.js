import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './LoginSignup/Home'
import Login from './LoginSignup/Login'
import Singnup from './LoginSignup/Singnup'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Singnup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
