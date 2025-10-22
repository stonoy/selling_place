const createError = require("../customError")
const Chat = require("../models/chat")
const OnlineUser = require("../models/onlineUser")

const allowedUserInfo = "name role avater"

const createChat = async(req, res) => {
    // check toUser and fromUser has already has a chat
    const fromUserId = req.user._id
    const toUserId = req.body.toUserId

    // provide chat that has following participents
    const theChat = await Chat.findOne({participants : {$all : [fromUserId, toUserId]}})

    // if yes and not blocked, provide the chatId
    if (theChat && theChat.status === "active"){
        res.status(200).json({theChat})
        return
    }

    if (theChat && theChat.status === "blocked"){
        createError("chat blocked", 400)
        return
    }

    // if no, create a new one
    const newChat = Chat({
        participants: [fromUserId, toUserId],
    })

    await newChat.save()

    res.status(201).json({theChat: newChat})
}

const getTheChat = async(req, res) => {
    const {chatId} = req.params
    const loggedInUserId = req.user._id


    // find chat with the id, loggedInUser as one of the participents, and active
    const theChat = await Chat.findOne({
        _id: chatId,
        participants: loggedInUserId,
        status: "active"
    })
    .populate("participants", allowedUserInfo)
    // .populate("messages.sender", allowedUserInfo)

    // set loggedinuser to active participents
    if (!theChat.activeParticipants.includes(loggedInUserId)){
        theChat.activeParticipants = [...theChat.activeParticipants, loggedInUserId]
    }

    // update all messages seen if sender is not the userId as well as the lastMessage
    theChat.messages = theChat.messages.map(msg => {
        if (msg.sender.toString() !== loggedInUserId.toString()){
            return {...msg, seen: true}
        } else {
            return msg
        }
    })

    if (theChat?.lastMessage && theChat?.lastMessage?.sender != loggedInUserId){
        theChat.lastMessage.seen = true
    }

    // save the updates
    await theChat.save()

    // provide the chat
    res.status(200).json({theChat})
}

const getChatHeads = async(req, res) => {
    const loggedInUserId = req.user._id

    // provide the chats(active) without messages in which userId is one of the participents 
    let myChatHeads = await Chat.find({
        participants: loggedInUserId,
        status: "active"
    }).populate("participants", allowedUserInfo).lean()

    delete myChatHeads.messages

    res.status(200).json({myChatHeads})
}

const removeFromActiveList = async (req, res) => {
    const {chatId} = req.params
    const loggedInUserId = req.user._id


    // find chat with the id, loggedInUser as one of the participents, and active
    await Chat.updateOne({_id:chatId}, {$pull : {activeParticipants : loggedInUserId}})

    res.status(200).json({msg: "user removed from chat active list"})
}

// socket ops...

const myOnlineChatCounterParts = async (userId) => {
    // search all active chats of the recently online user : db
    const myChats = await Chat.find({
        participants : userId,
        status: "active"
    }).lean()

    // get other chat participant
    const others = myChats.map(chat => {
        return chat.participants.find(member => member != userId.toString())
    })
      
    // select those among them, who are online : db
    const othersOnline = await OnlineUser.find({
        userId: {
            $in : others
        },
        status: "online"
    }).lean()

    return othersOnline
}

module.exports = {createChat, getTheChat, getChatHeads,removeFromActiveList, myOnlineChatCounterParts}