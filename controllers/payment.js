const instance = require("../config/razorpay")
const Payment = require("../models/payment")
const Product = require("../models/product")
const {validateWebhookSignature} = require('razorpay/dist/utils/razorpay-utils')
// const { findOne, findById } = require("../models/post")
const User = require("../models/user")
const createError = require("../customError")

const amount = 50000

const createOrder = async (req, res) => {
    const {productId} = req.params
    const loggedInUser = req.user

    // return if user is admin
    if (loggedInUser.role == "admin"){
        createError("No need for admin to pay", 400)
        return
    }

    // check the product, product should be hosted by loggedin user
    const theProduct = await Product.findOne({_id: productId, userId: loggedInUser._id})
    if (!theProduct || theProduct.featured){
        createError("invalid featured request", 400)
        return
    }

    const options = {
        amount,
        currency: "INR",
        receipt: "order_rcptid_11",
        notes: {
            userId: loggedInUser?._id,
            name: loggedInUser.name,
            email: loggedInUser.email,
            productId: theProduct._id
        }
    }

    // console.log(options)

    const order = await instance.orders.create(options)

    // console.log(order)

    const newPayment = Payment({
        userId: loggedInUser._id,
        orderId: order.id,
        amount: order.amount,
        status: order.status,
        productId : theProduct._id
    })

    await newPayment.save()

    res.json({...order, key: process.env.RP_KEY})
}

const checkWebhook = async (req, res) => {
    // console.log(req.body)
    // check header for rp signature
    const webhookSignature = req.get["X-Razorpay-Signature"] || req.get("X-Razorpay-Signature")
    

    console.log(webhookSignature)

    // validate webhook
    const isWebhookValid = validateWebhookSignature(JSON.stringify(req.body), webhookSignature, process.env.WEBHOOK_SECRET)

    console.log(isWebhookValid)

    if (!isWebhookValid){
        createError("webhook is not valid", 400)
        return
    }

    
    console.log(req.body.payload.payment.entity)

    const {order_id, captured, notes:{userId, productId}} = req.body.payload.payment.entity

    // update the payment
    const thePayment = await Payment.findOne({orderId: order_id})
    thePayment.status = captured ? "successful" : "failed"

    await thePayment.save()

    // update the product -> featured : true
    await Product.updateOne({_id: productId, userId}, {featured: true})

    res.status(200).json({msg : "ok"})
}

const verifyPayment = async(req, res) => {
    const loggedInUser = req.user
    const {orderId} = req.params

    const thePayment = await Payment.findOne({userId: loggedInUser._id, orderId, status: "successful"})


    res.status(200).json({paymentReceived: thePayment?.status == "successful" ? "successful" : "failed"})
}


module.exports = {createOrder, checkWebhook, verifyPayment}