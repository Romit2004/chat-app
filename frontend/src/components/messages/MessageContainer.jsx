import React, { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import {TiMessages} from 'react-icons/ti'
import useConversation from '../../zustand/useConversation';
import { useAuthContext } from '../../context/AuthContext';



const NoChatSelected = () => {
const {authUser} = useAuthContext()
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl dark:text-gray-200 font-semibold flex flex-col items-center gap-2 text-black'>
				<p>Welcome 👋 {authUser.fullName} ❄</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
};

const MessageContainer = () => {
  const {selectedConversation,setSelectedConversation} = useConversation()

  useEffect(()=>{
    return () => setSelectedConversation(null)
  },[setSelectedConversation])
 
  return (
    <div className='md:min-w-[450px] flex flex-col'>
      {!selectedConversation? 
      (<NoChatSelected />) : (
      <>
      <div className='px-4 py-2 mb-2 dark:bg-slate-100 bg-slate-800 '>
      <span className='label-tex  text-blue-800 font-bold '>To:</span>
      <span className=' font-bold text-blue-600'>{selectedConversation.fullName}</span>
    </div>
    </>
      )
      }
      <>
      
     

      <Messages />
      <MessageInput />
      </>
      
    </div>
  )
}

export default MessageContainer

