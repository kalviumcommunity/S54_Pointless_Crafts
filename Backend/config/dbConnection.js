const mongoose = require('mongoose')
require('dotenv').config()



function connectToDB() {
    return mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

module.exports = connectToDB;