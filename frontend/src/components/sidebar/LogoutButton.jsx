import React from 'react'
import {BiLogOut} from "react-icons/bi"
import useLogout from '../../hooks/useLogout.js'


const LogoutButton = () => {

 const {loading,logout} = useLogout()

  return (
   
      <div className='mt-auto'>

        {!loading ? (  <BiLogOut className='w-7 h-7 text-sky-500 cursor-pointer'
        onClick ={logout}
        />) : 
        (<span className='loading loading-spinner'></span>)
        }
      
    </div>
  )
}

export default LogoutButton
