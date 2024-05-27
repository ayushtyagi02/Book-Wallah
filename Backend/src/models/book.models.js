import mongoose ,{Schema} from "mongoose";

const bookSchema   = new Schema({
    bookName : {
        type : String ,
        required : true ,
    },
    ownerName :{
        type : Schema.Types.ObjectId ,
        ref : "User"
    },
    authorName:{
        type:String,
        required:true
    },
    description :{
        type : String ,
        required : true 
    },
    coverImage:{
        type : String ,
        required : true  
    } ,
    publishDate :{
        type : Date ,
        default:Date.now() 
    },
    status:{
        type: String,
        required: true,
        default:"Posted",
        enum:["Process","Exchanged","Borrowed","Posted"]
    },
    genre:{
        type:String,
        required:true
    }


} ,{
    timestamps : true
})

export const Book = mongoose.model("Book" , bookSchema)