import React from 'react'
import LoginForm from '../components/Auth/LoginForm'
import login from '../assets/login.png'
const LoginPage = () => {
  return (
    <div className='w-11/12 flex space-x-14 p-8 h-[100vh] mt-10 mx-auto'>
        
        <img className='rounded-md shadow-lg w-[35%] m-8 h-[60%]' src={login}/>
        <LoginForm/>
    </div>
  )
}

export default LoginPage