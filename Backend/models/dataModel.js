const mongoose = require('mongoose')

const hacksSchema = new mongoose.Schema({
    title: { type: String, required: true },
    category: { type: String, required: true },
    videoUrl: { type: String, required: true },
    timeDuration: { type: String, required: true },
    // image: { type: String, required: true },
    // user: { type: String, required: true, },
    // likes: { type: Number, default: 0, },
    // comments: { type: Number, default: 0, },
})

module.exports = mongoose.model("hacks", hacksSchema);