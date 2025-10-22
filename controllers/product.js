const createError = require("../customError")
const OnlineUser = require("../models/onlineUser")
const Product = require("../models/product")
const User = require("../models/user")
const productsArray = require("../utils")

const allowedUserInfo = "name role avater"

const setProducts = async (req, res) => {
    // for now: get userIds and set rondom of them to product userId
    const allUsers = await User.find().lean()

    const userIds = allUsers.map(user => user._id)

    for(let product of productsArray){
        const randomId = Math.floor(Math.random()* userIds.length)
        const userId = userIds[randomId]
        const {title, description, price, images, category, isSold, location, type} = product
        const newProduct =  Product({
            userId,
            title,
            description,
            price,
            images,
            category,
            isSold,
            location,
            type,
        })

        await newProduct.save()
    }

    res.status(201).json({msg: "products saved!"})
}

const getProducts = async (req, res) => {
    let {location, search, type, typeSpecificLocation, priceRange, page} = req.query

    let queryObj = {}  // when type query come, only query by type and when location or/and search come query only by them

    if (search){
        // Case-insensitive search using regex
        const regex = new RegExp(search, "i");
        
        queryObj["title"] = regex
}

    if (location && location !== "India"){
        const regex = new RegExp(location, "i")
        queryObj["location"] = regex
    }

    if (type){
        const regex = new RegExp(type, "i")
        queryObj["type"] = regex
    }

    if (typeSpecificLocation){
        const regex = new RegExp(typeSpecificLocation, "i")
        queryObj["location"] = regex
    }

    if (priceRange){
        const min = Number(priceRange.split(",")[0])
        const max = Number(priceRange.split(",")[1])

        queryObj["price"] = { $gte : min, $lte: max}
    }

    // pagination later implement
    let currentPage = page || 1
    let limit = 12
    let offset = (currentPage - 1)*limit

    const products = await Product.find(queryObj).populate("userId", allowedUserInfo)
                            .sort({updatedAt : -1}) // latest at first
    
    const totalProducts = await Product.countDocuments(queryObj)

    const numOfPages = Math.ceil(totalProducts/limit)                   
    
    res.status(200).json({products})
}

const getSingleProduct = async (req, res) => {
    const {productId} = req.params

    const theProduct = await Product.findById(productId).populate("userId", allowedUserInfo).lean()

    const isUserOnline = await OnlineUser.findOne({userId: theProduct.userId, status: "online"})

    res.status(200).json({theProduct: {...theProduct, isUserOnline: isUserOnline ? true : false}})
}

const getSuggestions = async (req, res) => {
    const {search} = req.query

    // create a queryObj -> that matches title, type and category
    let queryObj = {}

    if (search){
        const regex = new RegExp(search, "i")
        queryObj = {
            $or: [
            { title: regex },
            { type: regex },
            { category: regex },
            ],
        }
    }

    let suggestions = await Product.find(queryObj).lean()

    suggestions = suggestions.map((item) => {
        return {
            title: item?.title,
            type: item?.type
        }
    })

    res.status(200).json({suggestions})
}

const addProduct = async (req, res) => {
    const newProduct = Product({...req.body, userId: req.user._id, featured: false})

    await newProduct.save()

    res.status(201).json({msg: "product saved"})
}

const getMyProducts = async (req, res) => {
    const myProducts = await Product.find({userId: req.user._id})

    res.status(200).json({myProducts})
}



module.exports = {getProducts, setProducts, getSingleProduct, getSuggestions, addProduct, getMyProducts}