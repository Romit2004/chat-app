import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'
import Themebtn from '../../components/Themebtn'
const Home = () => {
  return (
   
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border p-6 dark:border-blue-400 shadow-3xl border-blue-400 h-full flex-col'>
      <Themebtn />
      <div className='flex mt-3 overflow-hidden h-full'>
      <Sidebar/>
      <MessageContainer />
   </div>   
      
    
    </div>
  )
}

export default Home
