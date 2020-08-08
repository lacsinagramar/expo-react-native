import { useState, useEffect, useCallback } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { fetchMessages, createMessage } from '~/firebaseService'

const useTrainerChat = ({ id, name, roomId }) => {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    fetchMessages(roomId, setMessages)
  }, [roomId])

  const handleMessageSend = useCallback(
    (message = []) => {
      createMessage(roomId, {
        ...message[0],
        createdAt: new Date().toISOString()
      })
      setMessages(prevMessage =>
        GiftedChat.append(prevMessage, message)
      )
    },
    [roomId]
  )

  const currUser = {
    _id: id,
    name,
    avatar: 'https://placeimg.com/140/140/any'
  }

  return { messages, handleMessageSend, currUser }
}

export default useTrainerChat
