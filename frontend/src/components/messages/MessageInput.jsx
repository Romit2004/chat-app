import React, { useState } from 'react'
import {BsSend} from "react-icons/bs"
import useSendMessage from '../../hooks/useSendMessage'
import useConversation from '../../zustand/useConversation'

const MessageInput = () => {
  const [message,setMessage] = useState("")
  const {loading,sendMessage} = useSendMessage()
  const {selectedConversation,setSelectedConversation} = useConversation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!message) return;
    await sendMessage(message);
    setMessage("")
  }
  
  return (
    <div>
      {!selectedConversation ? <></> : 
      <>
        <form className='px-4 my-3' onSubmit={handleSubmit}>
    <div className='w-full relative'>
    <input type="text" className='border text-sm rounded-lg block w-full p-2.5 border-sky-500 dark:text-gray-200 text-black dark:bg-black bg-white' placeholder='Send a message'
    value={message}
    onChange={(e)=>setMessage(e.target.value)}
    />
    <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3 text-sky-500'>
  
    {loading? <div className='loading loading-spinner'></div> :   <BsSend />}
    </button>
    </div>

   </form>
      </>}

    </div>
    
   
  )
}

export default MessageInput
