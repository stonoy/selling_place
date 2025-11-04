import React, { useEffect } from 'react'
import { useNavigate, useOutletContext, useParams } from 'react-router-dom';
import { ChatHead } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { addLastMsgViaSocket, getChatHeads, removeTyping, setTyping } from '../feature/chatSlice';
import { resetFilters } from '../feature/productSlice';


// make : if user present then this page renders

const ChatPage = () => {
  const {chatHeads, isLoading} = useSelector(state => state.chat)
  const {user} = useSelector(state => state.user)
  const dispatch = useDispatch()
  const {socket} = useOutletContext()
  const navigate = useNavigate()

  // console.log(chatHeads, isLoading, user)

  useEffect(() => {
      // reset all query/filters
      dispatch(resetFilters())
      // get the chatHeads
      dispatch(getChatHeads()).then(({type, payload}) => {
        if (type !== "chat/getChatHeads/fulfilled"){
          localStorage.clear()
          navigate("/login")
          return
        }

        if (socket){
        payload?.myChatHeads.forEach((chat) => {
          socket.emit("joinroom", ({toUserId: user._id, fromUserId: chat.participants.find(p => p._id !== user?._id)?._id}))
        })
      }
      })

      if (socket){
        // chatHeads.forEach((chat) => {
        //   socket.emit("joinroom", ({toUserId: user._id, fromUserId: chat.participants.find(p => p._id !== user?._id)?._id}))
        // })

        socket.on("receiveMessage", ({chatId, newMessage}) => {
                  
                  // find the chatHead and update last message
                  dispatch(addLastMsgViaSocket({chatId, newMessage}))

        })

        socket.on("showTyping", ({typerId, chatId}) => {
          
                  // show typing effect if by other user
                  if (typerId !== user?._id){
                    // find the chatHead and update typing
                    dispatch(setTyping({chatId}))
        
                    // remove it after half second
                    setTimeout(() => {
                      dispatch(removeTyping({chatId}))
                    }, 500)
                  }
        
                  
                })

      }

      return () => {
              
      
              if (socket){
                socket.off("receiveMessage")
                socket.off("showTyping")
              }
            }
  }, [])

  if (chatHeads.length === 0){
    return <h1>No chats</h1>
  }

  if (isLoading){
    return <h1>Loading...</h1>
  }

  
  
  return (
    <div className="flex h-full">
      {/* ChatHead list */}
      <div className="hidden md:block w-1/3 border-r">
        <ChatHead
          chatList={chatHeads}
  
         
        />
      </div>

      {/* On mobile, show chat heads full screen if no chat selected */}
      <div className={`md:hidden flex-1`}>
        <ChatHead
          chatList={chatHeads}
          
        />
      </div>

      {/* ChatBox area */}
      <div className={`hidden md:block w-2/3 `}>
        
        
          <div className="flex h-screen items-center justify-center">
            <p>Select a chat</p>
          </div>
        
      </div>
    </div>
  );
}

export default ChatPage