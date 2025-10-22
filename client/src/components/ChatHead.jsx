import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useOutletContext } from 'react-router-dom';
import { FaCheckDouble } from "react-icons/fa6";

const ChatHead = ({ chatList, selectedChatId="" }) => {
  const {user, onlineUsers} = useSelector(state => state.user)


  return (
    <div className="overflow-y-auto">
      {chatList.map(chat => {
        // Determine “the other user” (not me)
        const meId = user._id; // assume my user id
        const other = chat.participants.find(p => p._id !== meId);
        const isRecipientOnline = onlineUsers.includes(other._id)
        const lastMsg = chat?.lastMessage
        return (
          <Link
            to={`/chat/${chat._id}`}
            key={chat._id}
            // onClick={() => onSelectChat(chat.id)}
            className={`cursor-pointer p-4 flex items-center ${
              selectedChatId === chat._id ? "bg-base-200" : ""
            }`}
          >
            <img
              src={other?.avater}
              alt={other?.name}
              className="w-12 h-12 rounded-full mr-3"
            />
            <div className="flex-1">
              <div className="flex justify-between">
                <span className="font-medium">{other?.name}</span>
                <span
                  className={
                    isRecipientOnline ? "text-green-700" : "text-gray-400"
                  }
                >
                  ●
                </span>
              </div>
              <div className="text-sm text-gray-500 truncate">
                {
                  chat?.typing ?
                  <p className='text-green-500 font-semibold'>typing...</p>
                  :
                  <>
                    {lastMsg?.sender === meId ? "You: " : ""}
                    <span className={`${lastMsg?.sender !== meId && !lastMsg?.seen ? "font-bold" : ""}`}>{lastMsg?.text}</span>
                    {lastMsg?.sender === meId && <FaCheckDouble className={`inline-block ml-2 text-lg  font-bold ${lastMsg?.seen ? "text-blue-800" : "text-slate-600"}`} />}
                  </>
                }
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ChatHead