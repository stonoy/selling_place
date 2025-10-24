import React, { useEffect } from 'react'
import ChatHead from '../components/ChatHead';
import { useOutletContext, useParams } from 'react-router-dom';
import { ChatBox } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { getChatHeads, getTheChat, removeFromActiveChatList, updateLastMsgSeen, updateMsgsSeen } from '../feature/chatSlice';
import { resetFilters } from '../feature/productSlice';

// make : if user present then this page renders

const FullChat = () => {
  const {chatId: selectedChatId} = useParams()
  const {theChat,chatHeads, isLoading} = useSelector(state => state.chat)
  const {user} = useSelector(state => state.user)
  const dispatch = useDispatch()
  const {socket} = useOutletContext()

  // console.log(theChat,chatHeads, isLoading, selectedChatId, user)
  

  useEffect(() => {
    // reset all query/filters
          dispatch(resetFilters())
      // get the chat using chatId
    dispatch(getTheChat(selectedChatId)).then(() => {
      // if no chatHeads are present fetch them
    dispatch(getChatHeads()).then((data) => {
      // console.log(data)
        if (socket){
        data?.payload?.myChatHeads.forEach((chat) => {
          socket.emit("joinroom", ({toUserId: user._id, fromUserId: chat.participants.find(p => p._id !== user?._id)?._id}))
        })
      }
      })
    })

    // console.log(socket)

      if (socket){
        
        // chatHeads.forEach((chat) => {
        //   socket.emit("joinroom", ({toUserId: user._id, fromUserId: chat.participants.find(p => p._id !== user?._id)?._id}))
        // })

        // -> to set old messages seen when user opens a chat
        // emit socket with chatId and userId, when user opens a chat
        socket.emit("openChat", ({chatId: selectedChatId, userOpenerId: user?._id}))
        
        // listen to that event 
        socket.on("setMsgSeen", ({chatId, userOpenerId}) => {
          // console.log(({chatId, userOpenerId}))

          // serach in chat heads and update last message seen is sender is not userOpenerId
          dispatch(updateLastMsgSeen({chatId, userOpenerId}))

          // update chat messages and last message to seen if sender is not userOpenerId
          dispatch(updateMsgsSeen({chatId, userOpenerId}))
        })
      }

    
      return () => {
        dispatch(removeFromActiveChatList(selectedChatId))

        if (socket){
          // console.log("full chat clean up rans")
          socket.off("setMsgSeen")
          socket.off("receiveMessage")
        socket.off("showTyping")
        socket.off("receiveError")
        }
      }

  }, [socket, selectedChatId])

  if (!theChat){
    return <h1>No chat</h1>
  }

  if (isLoading){
    return <h1>Loading...</h1>
  }

  return (
    <div className="flex h-full">
      {/* ChatHead list */}
      <div className="hidden md:block w-1/3 border-r-2 border-r-blue-500">
        <ChatHead
          chatList={chatHeads}
          selectedChatId={selectedChatId}
        />
      </div>

      {/* On mobile, show chat heads full screen if no chat selected */}
      {/* <div className={`md:hidden flex-1 `}>
        <ChatHead
          chatList={chatList}
          selectedChatId={selectedChatId}
        />
      </div> */}

      {/* ChatBox area */}
      <div className={`flex-1`}>
        
          <ChatBox chat={theChat} />
        
      </div>
    </div>
  );
}

export default FullChat