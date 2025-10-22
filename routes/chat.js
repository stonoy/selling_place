const express = require("express")
const chatRouter = express.Router()
const {createChat, getTheChat, getChatHeads, removeFromActiveList} = require("../controllers/chat")
const userAuth = require("../middlewares/userAuth")

chatRouter.post("/createchat", userAuth, createChat)
chatRouter.get("/getthechat/:chatId", userAuth, getTheChat)
chatRouter.get("/getchatheads", userAuth, getChatHeads)
chatRouter.patch("/removefromchatactive/:chatId", userAuth, removeFromActiveList)

module.exports = chatRouter