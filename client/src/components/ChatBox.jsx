import React, { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useOutletContext } from 'react-router-dom';
import { addLastMsgViaSocket, addNewMessageViaSocket, removeFromActiveChatList, removeTyping, setTyping } from '../feature/chatSlice';
import { useRef } from 'react';
import { getLastSeen } from '../feature/userSlice';

function ChatBox({ chat }) {
  const {user, onlineUsers, userSubmitting} = useSelector(state => state.user)
  const meId = user._id; // your user ID
  const {socket} = useOutletContext()
  const [msg, setMsg] = useState("")
  const dispatch = useDispatch()
  const bottomRef = useRef()
  const [lastSeen, setLastSeen] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  // console.log(onlineUsers)

  useEffect(() => {
     setTimeout(() => {
            bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
          }, 500)

      if (socket){
        // socket.emit("joinroom", ({toUserId: user._id, fromUserId: other._id, from:"chat box"}))
        

        socket.on("receiveMessage", ({chatId, newMessage}) => {
          // console.log(chatId, newMessage)
          // find the chatHead and update last message
          dispatch(addLastMsgViaSocket({chatId, newMessage}))

          // add messages to the chat
          dispatch(addNewMessageViaSocket({chatId, newMessage}))

          // scroll to bottom
          setTimeout(() => {
            if (chat?._id === chatId){ // each chatbox weather offloaded, receives socket connections; so scroll down if the chat which msg is coming
              bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
            }
          }, 500)
        })

        socket.on("showTyping", ({typerId, chatId}) => {
          // console.log("typing")
          // show typing effect if by other user
          if (typerId !== user?._id){
            dispatch(setTyping({chatId}))
            
            if (chatId === chat?._id){
              setIsTyping(true)
            }
            

            // remove it after half second
            setTimeout(() => {
              if (chatId === chat?._id){
              setIsTyping(false)
            }
              dispatch(removeTyping({chatId}))
            }, 500)
          }

          
        })

        socket.on("receiveError", () => {
          // do it later...
        })
      }

      return () => {
        
        if (socket){
          socket.off("receiveMessage")
        socket.off("showTyping")
        socket.off("receiveError")
        
        }
      }

  }, [socket]) // at first load there was no socket as effects run top -> bottom and if user reconnects new socket created

  const sendMsg = () => {
    if(!msg){return}

    socket.emit("sendMessage", ({toUserId: other._id, fromUserId: user._id, text: msg, chatId: chat._id}))
    setMsg("")
  }

  const handleLastSeen = (recipientId) => {
    dispatch(getLastSeen(recipientId)).then((data) => {
      if (data.type === "user/getLastSeen/fulfilled"){
        setLastSeen(data?.payload?.lastSeen)
      }
    })
  }

  const handleTyping = () => {
    socket.emit("sendTyping", ({toUserId: other._id, fromUserId: user._id, chatId: chat._id}))
  }

  if (!chat) {
    return <div>Loading chat...</div>;
  }

  // find the other user
  const other = chat.participants.find(p => p._id !== meId);

  const isRecipientOnline = onlineUsers.includes(other._id)

  return (
    <div className="flex flex-col h-[80vh]">
      {/* Top area */}
      <div className="p-4 border-b flex items-center">
        <img
          src={other?.avater}
          alt={other?.name}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <div className="font-medium">{other?.name}</div>
          <div className="flex gap-2 text-xs text-gray-500">
            {isRecipientOnline ? 
            <p>online</p>
            :
            lastSeen ?
            <p>{new Date(lastSeen).toLocaleString()}</p>
            :
            <button disabled={userSubmitting} onClick={() => handleLastSeen(other?._id)}>get last seen</button>
          }
          {isTyping && <span className='p-1 text-center rounded-lg text-white bg-green-700'>typing...</span>}
          </div>
          
        </div>
      </div>

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto p-4">
        {chat?.messages.map((msg, idx) => {
          const isMe = msg.sender === meId;
          const alignment = isMe ? "chat-end" : "chat-start";

          return (
            <div key={idx} className={`chat ${alignment}`}>
              <div className="chat-bubble">
                {msg?.text}
                {/* optionally show “seen” or timestamp in footer */}
                <div className="text-xs opacity-50 mt-1">
                  {isMe ? msg?.seen ? "seen" : "delivered" : ""}
                </div>
              </div>
            </div>
          );
        })}
        {/* show typing , moved to top */}
        {/* {isTyping && (
          <div className="chat mb-4 chat-start">
            <div className="chat-bubble bg-success text-base-content opacity-50">
              typing...
            </div>
          </div>
        )} */}
        {/* scroll to bottom */}
        <div  ref={bottomRef}></div>
      </div>

      {/* Input & send */}
      <div className="p-4 border-t">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Type a message..."
            className="input input-bordered flex-1 border-2 border-blue-500"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            onKeyDown={handleTyping}
          />
          <button onClick={sendMsg} className="btn btn-primary">Send</button>
        </div>
      </div>
    </div>
  );
}


export default memo(ChatBox)