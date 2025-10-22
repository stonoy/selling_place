const express = require("express")
const userRouter = express.Router()
const {login, register, logout, getUser, wishListProduct} = require("../controllers/user")
const { loginGoogle } = require("../controllers/google")
const passport = require("passport")
const userAuth = require("../middlewares/userAuth")

const redirectUrl = process.env.NODE_ENV === "PRODUCTION" ? "/login" : "http://localhost:5173/login"

userRouter.post("/register", register)
userRouter.post("/login", login)
userRouter.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));
userRouter.get("/auth/google/callback", 
    passport.authenticate("google", { session: false, failureRedirect: redirectUrl }),
    loginGoogle
)
userRouter.post("/logout",userAuth,  logout)
userRouter.get("/getuser",userAuth,  getUser)
userRouter.patch("/addtowishlist/:productId", userAuth, wishListProduct)

module.exports = userRouter