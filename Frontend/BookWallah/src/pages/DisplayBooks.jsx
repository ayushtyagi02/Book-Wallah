import React from 'react'
import { BookDisplay } from '../components/BookDisplay'
import { SearchBar } from '../components/SearchBar'
import { PlaceholdersAndVanishInput } from '../extui/components/ui/placeholders-and-vanish-input'
const DisplayBooks = () => {
    const placeholders = [
        "What's the first rule of Fight Club?",
        "Who is Tyler Durden?",
        "Where is Andrew Laeddis Hiding?",
        "Write a Javascript method to reverse a string",
        "How to assemble your own PC?",
      ];
    
      const handleChange = (e) => {
        console.log(e.target.value);
      };
      const onSubmit = (e) => {
        e.preventDefault();
        console.log("submitted");
      }
  return (
    <div className='h-[100vh]'>
        
       
       <BookDisplay/>
    </div>
  )
}

export default DisplayBooks