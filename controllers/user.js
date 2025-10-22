const createError = require("../customError")
const User = require("../models/user")
const bcrypt = require("bcrypt")

const register = async(req, res) => {
    const {name, email, password} = req.body

    let theUser = await User.findOne({email})
    if (theUser){
        createError("User already registered, pls login", 400)
        return
    }

    if (!password || password.length < 6){
        createError("password length must be >= 6", 400)
        return
    }

    const hash = await bcrypt.hash(password, 10)

    let role = "user"

    const userCount = await User.countDocuments()
    if (userCount === 0){
        role = "admin"
    }

    const newUser = User({
        name,
        email,
        password: hash,
        role,
    })

    await newUser.save()

    res.status(201).json({msg: "user created"})
}

const login = async(req, res) => {
    const { email, password} = req.body

    let theUser = await User.findOne({email})
    if (!theUser){
        createError("Invalid email", 400)
        return
    }

    if (theUser.provider === "google"){
         createError("Invalid email, login using google", 400)
        return
    }

    const isPasswordCorrect = await theUser.comparePassword(password)
    if (!isPasswordCorrect){
        createError("Invalid password", 400)
        return
    }

    const token = theUser.createJwt()

    res.cookie("token", token, {expires : new Date(Date.now() + 1000*60*60*24)})

    theUser = theUser.toObject()

    delete theUser.password

    res.status(200).json({theUser})
}

const logout = async(req, res) => {
    res.cookie("token", null, {expires: new Date(Date.now())})
    res.status(200).json({msg : "user logged out"})
}

const getUser = async (req,res) => {
    let theUser = await User.findById(req.user._id)

    theUser = theUser.toObject()

    delete theUser.password

    res.status(200).json({theUser})
}

const wishListProduct = async (req, res) => {
    const {productId} = req.params

    const theUser = await User.findById(req.user._id)

    if (!theUser){
        createError("no such user found", 400)
        return
    }

    if (theUser?.wishlist?.includes(productId)){
        theUser.wishlist = theUser.wishlist.filter(pId => pId != productId)
    } else {
        theUser.wishlist = [...theUser.wishlist, productId]
    }

    await theUser.save()

    res.status(200).json({msg: "added to user's wishlist"})
}

module.exports = {login, register, logout, getUser, wishListProduct}