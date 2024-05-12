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
    fullname:{
        type:String,
        required:true

    },
    book:[{
        type : Schema.Types.ObjectId ,
        ref : "Book"
    }],
    profileImage:{
        type: String

    },
    password:{
        type: String,
        required: [true, 'Password is required']
    },
    
    refreshToken:{
      type: String
    },
    transactionRequests:[
        {
            type:Schema.Types.ObjectId,
            ref:"Transaction"
        }
    ]

},
{
    timestamps:true
})

export const User  = mongoose.model("User" , userSchema)