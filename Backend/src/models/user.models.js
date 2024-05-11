import mongoose , {Schema} from "mongoose";


const userSchema  = new Schema({
    username:{
        type: String ,
        required : true ,
        lowercase : true ,
        unique : true ,
        trim : true ,


    },
    email:{
        type: String ,
        required : true ,
        lowercase : true ,
        unique : true ,
        trim : true ,

    },
    firstName:{
        type: String ,
        required : true ,
      

    },
    lastName:{
        type: String ,
        required : true ,
    },
    book:{
        type : Schema.Types.ObjectId ,
        ref : "Book"

    },
    profileImage:{

    },
    password:{
        type: String,
        required: [true, 'Password is required']


    },
    dateOfBirth:{
        type : Date

    },
    refreshToken:{
       type :  String

    }

},
{
    timestamps:true
})



export const User  = mongoose.model("User" , userSchema)