const mongoose = require('mongoose')

const hacksSchema = new mongoose.Schema({
    title: { type: String, required: true },
    category: { type: String, required: true },
    videoUrl: { type: String, required: true },
    timeDuration: { type: String, required: true },
})

module.exports = mongoose.model("hacks", hacksSchema);