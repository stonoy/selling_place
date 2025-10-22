const express = require("express")
const cors = require("cors")
require("express-async-errors")
require("dotenv").config()
const cookieParser = require("cookie-parser")
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
// const helmet = require('helmet');
const passport = require("passport")
const { createServer } = require("http");
const path = require("path")

require("./config/googleCfg")
const errorMiddleware = require("./middlewares/error")
const connectDB = require("./config/database")
const productRouter = require("./routes/product")
const userRouter = require("./routes/user")
const {initialSocket} = require("./socket")
const chatRouter = require("./routes/chat")
const onlineUserRouter = require("./routes/onlineUser")
const payRoutes = require("./routes/payment")


const app = express()

app.use(express.static(path.resolve(__dirname, "./client/dist"))); // PROVIDING FRONTEND APP
app.use(passport.initialize())
app.use(express.json())
app.use(cookieParser())
app.use(mongoSanitize());
app.use(xss());
app.use(cors({
    origin : "http://localhost:5173",
    credentials: true, // Allow cookies
}))
// app.use(
//   helmet({
//     contentSecurityPolicy: false
//   })
// );

app.use("/api", productRouter)
app.use("/api", userRouter)
app.use("/api", chatRouter)
app.use("/api", onlineUserRouter)
app.use("/api/payment", payRoutes)

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./client/dist", "index.html")); // SERVER GIVEING FRONTEND APP TO USERS
  });

app.use("*", (req, res) => {
    res.status(404).json({msg : "No such path found"})
})

app.use(errorMiddleware)

const port = process.env.PORT

const server = createServer(app);

initialSocket(server)

connectDB(process.env.CONN_URI)
    .then(() => {
        server.listen(port, () => {
            console.log(`server is listening on port -> ${port}`)
        })
    })
    .catch((error) => {
        console.log(`server not started,  error in connecting db -> ${error}`)
    })