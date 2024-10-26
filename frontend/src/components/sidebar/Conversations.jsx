import React from 'react'
import Conversation from './Conversation'
import useConversation from '../../zustand/useConversation'
import useGetConversations from '../../hooks/useGetConversations.js'

const Conversations = () => {
  const {loading,conversations} = useGetConversations();
  console.log("Conversations", conversations)
  return (
    <div className='py-2 felx flex-col overflow-auto'>
      {conversations.map((conversation,idx)=>(
        <Conversation key={conversation._id} conversation={conversation}
        lastIdx={idx === conversations.length - 1}
        />
      ))}
     {loading ? <span className='loading loading-spinner'></span> : null}
    </div>
  )
}

export default Conversations
