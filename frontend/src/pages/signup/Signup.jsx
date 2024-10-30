import React, { useState } from 'react'
import GenderCheckbox from './GenderCheckbox'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup'

const Signup = () => {

    const [inputs, setInputs] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: ""
    })

    const { loading, signup } = useSignup(inputs)

    const handleCheckboxChange = (gender) => {
        setInputs({ ...inputs, gender })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs)
    }

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-3xl bg-sky-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border-sky-500 border-2 '>
                <h1 className='text-3xl font-semibold text-center dark:text-gray-300 text-slate-600'>
                    Signup
                    <span className='text-blue-500 pl-2'>
                        ChatApp
                    </span>
                </h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text dark:text-gray-300 text-slate-600'>Full Name</span>
                        </label>
                        <input type="text" placeholder='Enter Full Name' className='w-full input input-bordered h-10 dark:bg-slate-600 bg-white dark:text-gray-300 text-black' value={inputs.fullName}
                            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })} />
                        <label className='label p-2'>
                            <span className='text-base label-text dark:text-gray-300 text-slate-600'>Username</span>
                        </label>
                        <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-10 dark:bg-slate-600 bg-white dark:text-gray-300 text-black'
                            value={inputs.username}
                            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
                        />
                        <label className='label p-2'>
                            <span className='text-base label-text dark:text-gray-300 text-slate-600'>Password</span>
                        </label>
                        <input type="password" placeholder='Enter Password' className='w-full input input-bordered h-10 dark:bg-slate-600 bg-white dark:text-gray-300 text-black'
                            value={inputs.password}
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                        />
                        <label className='label p-2'>
                            <span className='text-base label-text dark:text-gray-300 text-slate-600'>Confirm Password</span>
                        </label>
                        <input type="password" placeholder='Enter Password' className='w-full input input-bordered h-10  dark:bg-slate-600 bg-white dark:text-gray-300 text-black'
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                        />

                    </div>
                    <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />
                    <Link to="/login" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block dark:text-gray-300 text-slate-600'>
                        Already have an account?
                    </Link>
                    <div>
                        <button className='btn btn-block btn-sm mt-2 bg-sky-600 text-white border-none hover:bg-blue-800' type='submit'>
                            {loading ? <span className='loading loading-spinner'></span> 
                            :
                            "Sign Up"}

                        </button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Signup
