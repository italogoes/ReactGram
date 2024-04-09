require("dotenv").config()
require("./config/db.js")

const express = require("express")
const path = require("path")
const cors = require("cors")
const router = require("./routes/Router")

const port = process.env.PORT

const app = express()

// config json and form data response
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// cors
app.use(cors({credentials: true, origin: "http://localhost:5000"}))

// upload directory
app.use("/uploads", express.static(path.join(__dirname, "/uploads")))

// routes
app.use(router)

// run app
app.listen(port, () => {
    console.log("app rodando!")
})