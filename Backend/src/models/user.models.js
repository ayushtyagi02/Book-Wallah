import mongoose , {Schema} from "mongoose";


const userSchema  = new Schema({
    userName:{
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
        // string :true 

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