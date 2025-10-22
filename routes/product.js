const express = require("express")
const productRouter = express.Router()
const userAuth = require("../middlewares/userAuth")
const {getProducts, setProducts, getSingleProduct, getSuggestions, addProduct, getMyProducts} = require("../controllers/product")

productRouter.get("/getproducts", getProducts)
productRouter.post("/setproducts", setProducts)
productRouter.get("/getsingleproduct/:productId", getSingleProduct)
productRouter.get("/getsingleproduct/:productId", getSingleProduct)
productRouter.get("/getsuggestions", getSuggestions)
productRouter.post("/addproduct", userAuth, addProduct)
productRouter.get("/getmyproducts", userAuth, getMyProducts)

module.exports = productRouter