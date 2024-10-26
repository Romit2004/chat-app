import React, { useEffect } from 'react'
import { useSocketContext } from '../context/SocketContext'
import useConversation from '../zustand/useConversation';
import notidicationSound from "../assets/sounds/notification_sound.mp3"
const useListenMessage = () => {
  const {socket} = useSocketContext();
  const {messages,setMessages} = useConversation()

  useEffect(()=>{
    socket?.on("newMessage",(newMessage)=>{
        const sound = new Audio(notidicationSound)
        sound.play();
        setMessages([...messages,newMessage])
    })

    return ()=>socket?.off("newMessage")
  },[socket,setMessages,messages])
}

export default useListenMessage
