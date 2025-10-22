const mongoose = require("mongoose")
const validator = require("validator")
const createError = require("../customError")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minLength: [2, "min name length is 2"],
        maxLength: [50, "max name length is 10"]
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: function(email){
            if (!validator.isEmail(email)){
                createError(`${email} is not valid`, 400)
            }
        }
    },
    password: {
        type: String,
    },
    role: {
        type: String,
        required: true,
        enum: {
            values: ["user", "admin"],
            message: "role is not supported"
        }

    },
    avater: {
        type: String,
        default: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    },
    googleId: {
        type: String,
    },
    provider: { type: String, enum: ["local", "google"], default: "local" , required: true},
    wishlist: [{type: mongoose.Schema.Types.ObjectId, ref: "Product"}],
}, {timestamps: true})

UserSchema.methods.comparePassword = async function(userPassword){
    return await bcrypt.compare(userPassword, this.password)
}

UserSchema.methods.createJwt = function(){
    return jwt.sign({_id: this._id, role: this.role}, process.env.JWT_SECRET, {expiresIn: '24h'})
}

const User = mongoose.model("User", UserSchema)

module.exports = User