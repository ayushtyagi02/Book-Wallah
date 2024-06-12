import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import ChipInput from '../ChipInput';
import Upload from './Upload'

import { MdNavigateNext } from 'react-icons/md'
import {HiOutlineCurrencyRupee} from 'react-icons/hi'
import { IoIosArrowDropdown } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { postbook } from '../../operations/apiServices/bookApi';
const AddBook = () => {
  const {user} = useSelector((state)=>state.profile)
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm()
  const dispatch = useDispatch();
  
  const { token } = useSelector((state) => state.auth)
  const navigate =useNavigate()
  const [loading, setLoading] = useState(false)
  
  const onSubmit = async (data) => {
 
    const formData = new FormData()
    formData.append("bookName", data.bookName)
    formData.append("description", data.description)
    formData.append("genre", data.genre)
    formData.append("authorName", data.authorName)
    formData.append("ownerName", user._id)
    formData.append("coverImage", data.coverImage)
    formData.append("token", token)

    setLoading(true)
    // const {authorName, ownerName, coverImage} = formData
    // console.log(authorName, ownerName, coverImage)
    dispatch(postbook(navigate,formData, token))
    // console.log(result,'result')
    // if (result) {
    //   dispatch(setStep(2))
    //   dispatch(setCourse(result))
    // }
    setLoading(false)
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='rounded-md border-richblack-700 bg-richblack-800 p-6 space-y-8'>
      <div>
      <div>
        <label>
        <span>Course Name<sup className='text-pink-200'>*</sup></span>
          <input
            id='bookName'
            placeholder='Enter Book Name'
            {...register("bookName", { required: true })}
            className='w-full form-style mt-3' />
          {errors.bookName && (
            <span className='ml-2 text-xs tracking-wide text-pink-400'>Book name is required</span>
          )}
        </label>
      </div>
      <div>
        <label>
          <span>Course Short Description<sup className='text-pink-200'>*</sup></span>
          <textarea
            id='description'
            placeholder='Enter Description..'
            {...register("description", { required: true })}
            className='min-h-[140px] w-full mt-3 form-style'
          />
          {errors.description && (
            <span className='ml-2 text-xs tracking-wide text-pink-400'>Course Description is required</span>
          )}
        </label>
      </div>

      <div>
        <label>
        <span>Author Name<sup className='text-pink-200'>*</sup></span>
          <input
            id='authorName'
            placeholder='Enter Author name'
            {...register("authorName", { required: true })}
            className='w-full form-style mt-3' />
          {errors.courseName && (
            <span className='ml-2 text-xs tracking-wide text-pink-400'>Author is required</span>
          )}
        </label>
      </div>
      <div>
        <ChipInput
          label="Tags"
          name="genre"
          placeholder="Enter genre and press Enter"
          register={register}
          errors={errors}
          setValue={setValue}
          getValues={getValues} />
      </div>
      </div>
      <Upload
        register={register}
        errors={errors}
        setValue={setValue}
        label="coverImage"
        name="coverImage"
      />
    
     
      <div className="flex justify-end gap-x-2">
      
        <button
          disabled={loading}
          
        >
          Next
          <MdNavigateNext />
        </button>
      </div>
    </form>
  )
}

export default AddBook
