import { User } from "../models/user.models.js"

const signup = async (req,res)=>{
   try {
    const {
        userName,
        email,
        firstName,
        lastName,
        profileImage,
        password

    }=req.body
    console.log(
        userName,
        email,
        firstName,
        lastName,
        profileImage,
        password,"hereeeeee")
    await User.create({
        userName,
        email,
        firstName,
        lastName,
        profileImage,
        password

    })
    return res.status(200).json({
        success: true,
        message: 'User created successfully'
    })
    
   } catch (error) {
    console.error(error)
    return res.status(500).json({
        success: false,
        message: 'Internal Server error'
    })
    
   }

}

export {
    signup
}