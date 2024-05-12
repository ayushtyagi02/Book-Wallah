import {asyncHandler} from "../utils/asyncHandler.js"
import {ApiError} from "../utils/apiError.js"
import {User} from "../models/user.models.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import {ApiResponse} from "../utils/apiResponses.js"

const generateAccessAndRefreshToken = async(userId)=>{
    try {
        const user  = await User.findById(userId)
        const accessToken  = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        user.refreshToken = refreshToken 
        await user.save({validateBeforeSave:false})
        return {accessToken , refreshToken}
    } catch (error) {
        throw new ApiError(401 , "Something went wrong while generating Access and Refresh Token !" )  
    }
}

const registerUser = asyncHandler(async (req,res)=>{


    const {fullname , email , username , password} = req.body

    if ([
        fullname , email , username , password 
    ].some((field)=>field?.trim()==="")) {
        throw new ApiError(400 , "All Field are required !")
    }
   console.log(email)
   console.log(username)
   console.log(fullname)
    const existedUser = await User.findOne({
        $or:[{username},{email}]
    })

    if(existedUser){
        throw new ApiError(409 , "User with email or username already exist !")
    }

    let profileImageLocalPath;
    if (req.files && Array.isArray(req.files.profileImage) && req.files.profileImage.length > 0) {
        profileImageLocalPath = req.files.profileImage[0].path
    } 
    
    const profileImage = await uploadOnCloudinary(profileImageLocalPath)

    const user = await User.create({
        fullname ,
        profileImage:profileImage?.url || "" ,
        email ,
        password ,
        username : username.toLowerCase()
    })

    const createdUser  = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if (!createdUser) {
        throw new ApiError(500, "Something went wrong while registering the user")
    }
  
    return res.status(201).json(
        new ApiResponse(200, createdUser, "User registered Successfully")
    )
})


export {
    registerUser
}