const mongoose = require('mongoose')
require('dotenv').config()

mongoose.createConnection(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    // useCreateIndex: true
    useUnifiedTopology: true
})