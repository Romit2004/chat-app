import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'
import Themebtn from '../Themebtn'


const Sidebar = () => {
    return (
        <div className='border-r border-sky-500 p-4 flex flex-col'>
             {/* <Themebtn /> */}
            <SearchInput />
            <div className='divider px-3'></div>
            <Conversations />
            <LogoutButton />
            
        </div>
    )
}

export default Sidebar
