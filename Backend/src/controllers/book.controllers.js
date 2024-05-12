import { Book } from "../models/book.models.js"
import { User } from "../models/user.models.js"

const createBook = async (req,res)=>{
    try {
        const {bookName, ownerName, description,coverImage,authorName}= req.body
        console.log(bookName, ownerName, description,coverImage,authorName,'hereeee')
    //validate
    if(!bookName || !ownerName || !description || !coverImage || !authorName){
        return res.status(400).json({
            success:false,
            message:'Please provide all fields'
        })
    }
    const newBook = await Book.create({
        bookName, ownerName, description,coverImage,authorName
    })
    const updatedUser = await User.findByIdAndUpdate({_id:ownerName},{$push:{"book":newBook}},{new:true})

    return res.status(200).json({
        success:true,
        updatedUser,
        message:"Book Created Successfully"
    })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            success:false,
            message:"Internal server error"
        })
        
    }
}
export {
    createBook
}