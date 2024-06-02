import { useNavigate } from "react-router-dom";
import { endpoints } from "../apis";
import {apiConnector} from '../apiConnector'
const {LOGIN_API}= endpoints;
import toast from "react-hot-toast";
import { setLoading, setToken } from "../../slices/authSlice";
import { setUser } from "../../slices/profileSlice";

export function login(email,password,navigate){
    return async(dispatch)=>{
      dispatch(setLoading(true));
      try{
        const response = await apiConnector("POST",LOGIN_API,{email,password})
        console.log(response)
        if(!response.data.success) {
          throw new Error(response.data.message);
        }
        toast.success("Login Succesfull");
        navigate('/dashboard/user-books')
        dispatch(setToken(response.data.data.accessToken))
        const profileImage = response.data?.data?.user?.profileImage
          ? response.data.data.user.profileImage
          : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.data.user.fullname} ${response.data.data.user.fullname}`
        dispatch(setUser({ ...response.data.data.user, profileImage: profileImage }))
        
        localStorage.setItem("token", JSON.stringify(response.data.data.accessToken))
        localStorage.setItem("user", JSON.stringify(response.data.data.user))
      }
      catch(error) {
        console.log("Login Error", error);
        toast.error(error.response.data.message);
      }
      dispatch(setLoading(false))
    }
  }