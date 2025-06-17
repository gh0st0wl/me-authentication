const express = require("express")
const app = express()
const UserRoute = require("./routes/userRoute")
const mongoose = require("mongoose")
require("dotenv").config()


app.use(express.json())

app.use("/user", UserRoute)

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("mongodbye bağlandı")
        app.listen(process.env.PORT, console.log("3000 portunda çalıştu"))
    })
    .catch(err => console.log(err))
