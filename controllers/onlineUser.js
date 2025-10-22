const OnlineUser = require("../models/onlineUser")

const getLastSeen = async (req, res) => {
    // by userId serach the user in onlineUser as user is offline, provide last update time
    const onlineUser = await OnlineUser.findOne({userId: req?.params?.recipientId, status: "offline"})

    if (!onlineUser){
        createError("user has not came online yet or online now", 400)
        return
    }

    res.status(200).json({lastSeen: onlineUser.updatedAt})
}

// socket ops...

const createOnlineUser = async (userId, socketId) => {
    // create with fresh socketId, set to online
    const newOnlineUser = OnlineUser({
        userId,
        socketId,
        status: "online"
    })

    await newOnlineUser.save()
}

const deleteOnlineUser = async (userId) => {
    // delete by userId
    await OnlineUser.deleteOne({userId})
}

const makeOffline = async (userId) => {
    // update by socketId to offline
    const onlineUser = await OnlineUser.findOne({userId})

    if (!onlineUser){
        createError("no such online user found with", 400)
        return
    }

    
    onlineUser.status = "offline"

    await onlineUser.save()
    
}

module.exports = {createOnlineUser, deleteOnlineUser, makeOffline, getLastSeen}