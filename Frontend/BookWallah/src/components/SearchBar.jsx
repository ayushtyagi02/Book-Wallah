"use client";

import { PlaceholdersAndVanishInput } from "../extui/components/ui/placeholders-and-vanish-input";

export function SearchBar() {
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
  };
  return (
    <div className="h-[15rem] flex flex-col justify-center  items-center px-4 border-2">
      <p className=" text-4xl mb-10 font-bold text-center dark:text-white text-black">
        Find your Favourite Books here: 
      </p>
      
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
