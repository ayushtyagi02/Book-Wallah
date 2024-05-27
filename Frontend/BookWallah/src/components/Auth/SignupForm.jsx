import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

const SignupForm = () => {

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        username: "",
    })

    const [showPassword, setShowPassword] = useState(false)
    const { fullName, email, password, username } = formData
    const handleOnChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }))
    }
    const handleOnSubmit = (e) => {
        e.preventDefault()

        const signupData = {
            ...formData,
            accountType,
        }

        setFormData({
            fullName: "",
            email: "",
            password: "",
            username: ""
        })
    }

    return (
        <div className='w-[60%]'>

            {/* Form */}
            <form onSubmit={handleOnSubmit} className="flex w-[80%] mx-auto flex-col gap-y-8 p-5 m-2">
                <div className="flex flex-col gap-y-4">
                <p className=' text-2xl text-slate-400 italic mb-2 font-semibold'>Hey Folks! Join us to explore a new world</p>
                    <label>
                        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                            Full Name <sup className="text-pink-200">*</sup>
                        </p>
                        <input
                            required
                            type="text"
                            name="firstName"
                            value={fullName}
                            onChange={handleOnChange}
                            placeholder="Enter name"
                            style={{
                                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                            }}
                            className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                        />
                    </label>
                    <label>
                        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                            Username <sup className="text-pink-200">*</sup>
                        </p>
                        <input
                            required
                            type="text"
                            name="username"
                            value={username}
                            onChange={handleOnChange}
                            placeholder="Enter Username"
                            style={{
                                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                            }}
                            className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                        />
                    </label>
                
                <label className="w-full">
                    <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                        Email Address <sup className="text-pink-200">*</sup>
                    </p>
                    <input
                        required
                        type="text"
                        name="email"
                        value={email}
                        onChange={handleOnChange}
                        placeholder="Enter email address"
                        style={{
                            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                        }}
                        className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                    />
                </label>
                
                    <label className="relative">
                        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                            Create Password <sup className="text-pink-200">*</sup>
                        </p>
                        <input
                            required
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={password}
                            onChange={handleOnChange}
                            placeholder="Enter Password"
                            style={{
                                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                            }}
                            className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-10 text-richblack-5"
                        />
                        <span
                            onClick={() => setShowPassword((prev) => !prev)}
                            className="absolute right-3 top-[38px] z-[10] cursor-pointer"
                        >
                            {showPassword ? (
                                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                            ) : (
                                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                            )}
                        </span>
                    </label>
                    </div>
            
                <button
                    type="submit"
                    className="mt-6 rounded-[8px] bg-indigo-500 text-white py-[8px] px-[12px] font-medium text-richblack-900"
                >
                    Create Account
                </button>
            </form>
        </div>
    )
}


export default SignupForm