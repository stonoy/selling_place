const socket = require("socket.io")
const Chat = require("./models/chat")
const { deleteOnlineUser, createOnlineUser, makeOffline } = require("./controllers/onlineUser")
const {myOnlineChatCounterParts} = require("./controllers/chat")
const OnlineUser = require("./models/onlineUser")

const provideRoomId = (toUserId, fromUserId) => [toUserId, fromUserId].sort().join("$")

const initialSocket = (server) => {
    const io = socket(server, {
        cors: {
            orgin: "http://localhost:5173"
        }
    })

    io.on("connection", (socket) => {
        const socketId = socket.id // each connected user gets their own socketId, used later to identify them to send response

        // console.log("connect", socketId)

        try {
            socket.on("online", async (userId) => {
                // console.log("login ", userId)
                // check if userId found in onlineUser delete it, then create a new one with fresh socketId : create and del onlineUser
                await deleteOnlineUser(userId) // old offline status
                await createOnlineUser(userId, socketId) 

                // myOnlineChatCounterParts
                const counterParts = await myOnlineChatCounterParts(userId)

                // send them via myOnlineChatCounterParts.socketIds the userId of recently online user
                counterParts.forEach(user => {
                    io.to(user.socketId).emit("userOnline", userId)
                })
            })

            socket.on("joinroom", ({toUserId, fromUserId}) => {
                // create a unique room id by those userIds, that roomId used to send messages and typing
                const roomId = provideRoomId(toUserId, fromUserId)

                // console.log("room joined")

                socket.join(roomId)
            })

            socket.on("sendMessage", async ({toUserId, fromUserId, text, chatId}) => {
                // console.log("---", toUserId, fromUserId, text, chatId)
                const roomId = provideRoomId(toUserId, fromUserId)

                // get the chat : db
                const theChat = await Chat.findById(chatId)

                // if chat is present and active
                if (theChat && theChat.status === "blocked"){
                    io.to(roomId).emit("receiveError", ("chat is blocked"))
                    return
                }

                // create a new message -> seen -> if toUser is in active participants
                let newMessage = {
                    sender: fromUserId,
                    text,
                    seen: theChat.activeParticipants.includes(toUserId) ? true : false
                }

                // update the chat : db
                theChat.messages = [...theChat.messages, newMessage]
                theChat.lastMessage = newMessage

                await theChat.save()

                newMessage = {...newMessage, createdAt: new Date(Date.now())}

                // send the newMessage to the room
                io.to(roomId).emit("receiveMessage", ({chatId, newMessage}))
            })

            socket.on("openChat", async ({chatId, userOpenerId}) => {
                // get the chat for their participents
                const theChat = await Chat.findById(chatId).lean()

                if(!theChat){
                    return
                }

                const ids = [...theChat.participants].map(id => id.toString())

                const roomId = provideRoomId(ids[0], ids[1])

                io.to(roomId).emit("setMsgSeen", ({chatId, userOpenerId}))
            })

            socket.on("sendTyping", async ({toUserId, fromUserId, chatId}) => {
                // console.log("typing", toUserId, fromUserId, chatId)

                // get the chat : db
                const roomId = provideRoomId(toUserId, fromUserId)

                // get the chat : db
                const theChat = await Chat.findById(chatId)

                // if chat is present and active
                if (theChat && theChat.status === "blocked"){
                    io.to(roomId).emit("receiveError", ("chat is blocked"))
                    return
                }

                // if chat is present and active

                // send the typerId, chatId to the room 
                io.to(roomId).emit("showTyping", ({typerId: fromUserId, chatId}))
            })

            // when user logout
            socket.on("disconnect", async () => {
                // console.log("logout ", socketId)

                // from the socketId, get the userId from onlineUser : db
                const onlineUser = await OnlineUser.findOneAndUpdate({socketId}, {status: "offline"}, {new: true})

                if (!onlineUser){
                    // console.log("no user")
                    return
                }

                // update the user from onlineUser : makeOffline
                // await makeOffline(onlineUser.userId)

                
                // myOnlineChatCounterParts
                const counterParts = await myOnlineChatCounterParts(onlineUser.userId)

                
                // send them via myOnlineChatCounterParts.socketIds the userId of recently offline user
                counterParts.forEach(user => {
                    io.to(user.socketId).emit("userOffline", onlineUser.userId)
                })
                
            })
        } catch (error) {
            // console.log(error)
        }
    })
}

module.exports = {initialSocket}