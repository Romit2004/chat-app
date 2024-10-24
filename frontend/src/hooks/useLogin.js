import { useState } from "react"
import { json } from "react-router-dom"
import { useAuthContext } from "../context/AuthContext"
import toast from "react-hot-toast"


const useLogin = () => {
const [loading,setLoading] = useState(false)
const {setAuthUser} = useAuthContext()

const login = async ({username,password}) => {
  
    const success = handelInputErrors({username,password})
    if(!success){
     
        return
    }
    setLoading(true)
    try {
        const res = await fetch("/api/auth/login",
            {
            method: "POST",
            headers: {"content-type" : "application/json"},
            body: JSON.stringify({username,password})  
            }
        )
        const data=await res.json()
        if(!data){
            throw new Error(data.error)
        }
        localStorage.setItem("chat-user",JSON.stringify(data))
        setAuthUser(data)
    } catch (error) {
        toast.error(error.message)
    }finally{
        setLoading(false)
    }
}
return {loading,login}
}

const handelInputErrors = ({username,password}) => {
    if(!username || !password){
        toast.error("Plesae fill in all the fields")
        return false
    }
    return true
}

export default useLogin