import mongoose ,{Schema} from "mongoose";

const bookSchema   = new Schema({
    bookName : {
        type : String ,
        required : true ,
    },
    authorName :{
        type : Schema.Types.ObjectId ,
        ref : "Author"
    },
    bookPrice :{
        type : Number 
    },
    description :{
        type : String ,
        required : true 
    },
    coverImageofBook:{
        type : String ,
        required : true  
    } ,
    publishDate :{
        type : Date ,
        
    }


} ,{
    timestamps : true
})

export const Book = mongoose.model("Book" , bookSchema)