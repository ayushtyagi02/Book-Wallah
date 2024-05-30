import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import ContactPage from './pages/ContactPage'
import DisplayBooks from './pages/DisplayBooks'
function App() {

  return (
    <>
       
        <div className='bg-indigo-100'>
          <Navbar/>

          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='signup' element={<SignupPage/>}/>
            <Route path='login' element={<LoginPage/>}/>
            <Route path='contact' element={<ContactPage/>}/>
            <Route path='explore-books' element={<DisplayBooks/>}/>
          </Routes>
        </div>
    </>
  )
}

export default App
