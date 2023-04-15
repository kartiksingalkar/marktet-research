require('dotenv').config();
const express = require('express')
const Form = require('./routes/form')
const cors = require("cors")

// const { con } = require("./utils/db.js")

const app = express()

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT"],
    credentials: false
}));

app.use(express.json())


// Middleware
// app.use(express.json())
// app.use((req,res,next) => {
//     console.log(req.path, req.method)
//     next()
// })


app.use('/api', Form)

// lISTEN FOR REQUEST
app.listen(process.env.PORT, () => {
    console.log("Listening on port", process.env.PORT)
})