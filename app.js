const express = require('express')
const app = express()
const port = 3100
const cors = require('cors')
const API = require('./routes/api')

// for uploading data
const fileUpload = require("express-fileupload");
app.use(fileUpload({useTempFiles: true}));

const connectdb = require('./DB/Connectdb')

// for api
app.use('/api',API)
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended:true}));


// for db connection
connectdb()

// for localhost port
app.listen(port, () => {
    console.log(`Start localhost: ${port}`)
})







