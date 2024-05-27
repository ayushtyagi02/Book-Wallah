import React from 'react'
import register from '../assets/register.png'
import SignupForm from '../components/Auth/SignupForm'
const SignupPage = () => {
  return (
    <div className='w-11/12 flex space-x-14 p-8 h-[100vh] mt-10 mx-auto'>
        
        <img className='rounded-md shadow-lg w-[35%] m-8 h-[60%]' src={register}/>
        <SignupForm/>
    </div>
  )
}

export default SignupPage