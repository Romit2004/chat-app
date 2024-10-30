import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin';

const Login = () => {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const {loading,login} = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login({username,password})
    }
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>

            <div className='w-full p-6 rounded-lg shadow-3xl bg-sky-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border-sky-500 border-2'>
                <h1 className='text-3xl font-semibold text-center dark:text-gray-300 text-slate-600'>
                    Login
                    <span className='text-blue-500 pl-2'>
                        ChatApp
                    </span>
                </h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text dark:text-gray-300 text-slate-600'>Username</span>
                        </label>
                        <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-10 dark:bg-slate-600 bg-white dark:text-gray-300 text-black'
                        onChange={(e)=> setUsername(e.target.value)}
                        />

                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text dark:text-gray-300 text-slate-600'>Password</span>
                        </label>
                        <input type="password" placeholder='Enter Password' className='w-full input input-bordered h-10 dark:bg-slate-600 bg-white dark:text-gray-300 text-black' 
                        onChange={(e)=>setPassword(e.target.value)}
                        />

                    </div>
                    <Link to="/signup" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block dark:text-gray-300 text-slate-600'>
                        {"Don't"} have an account?
                    </Link>
                    <div>
                        
                        <button className='btn btn-block btn-sm mt-2 bg-sky-600 text-white border-none hover:bg-blue-800'>
                            {loading? <span className='loading loading-spinner'>
                            </span>
                            :
                            "Login"}
                          
                        </button>
                    </div>

                </form>

            </div>

        </div>
    )
}

export default Login
