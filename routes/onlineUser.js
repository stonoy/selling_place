const express = require("express")
const { getLastSeen } = require("../controllers/onlineUser")
const onlineUserRouter = express.Router()
const userAuth = require("../middlewares/userAuth")

onlineUserRouter.get("/getlastseen/:recipientId", userAuth, getLastSeen)

module.exports = onlineUserRouter