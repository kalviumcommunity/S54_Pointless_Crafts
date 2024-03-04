const mongoose = require('mongoose')
const User = require('../models/userModel')
require('dotenv').config({ path: '../.env' })

const User1 = new User({
    userName: "user1",
    name: "Aplha",
    followers: 2,
    following: 1,
    favPosts: [],
})
const User2 = new User({
    userName: "user1",
    name: "Aplha",
    followers: 2,
    following: 1,
    favPosts: [],
})
const User3 = new User({
    userName: "user1",
    name: "Aplha",
    followers: 2,
    following: 1,
    favPosts: [],
})
const User4 = new User({
    userName: "user1",
    name: "Aplha",
    followers: 2,
    following: 1,
    favPosts: [],
})
const User5 = new User({
    userName: "user1",
    name: "Aplha",
    followers: 2,
    following: 1,
    favPosts: [],
})
const User6 = new User({
    userName: "user1",
    name: "Aplha",
    followers: 2,
    following: 1,
    favPosts: [],
})
const User7 = new User({
    userName: "user1",
    name: "Aplha",
    followers: 2,
    following: 1,
    favPosts: [],
})
const User8 = new User({
    userName: "user1",
    name: "Aplha",
    followers: 2,
    following: 1,
    favPosts: [],
})
const User9 = new User({
    userName: "user1",
    name: "Aplha",
    followers: 2,
    following: 1,
    favPosts: [],
})
const User10 = new User({
    userName: "user1",
    name: "Aplha",
    followers: 2,
    following: 1,
    favPosts: [],
})

const userData = [User1, User2, User3, User4, User5, User6, User7, User8, User9, User10]

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("Connected to MongoDB database"))
    .catch((error) => console.error("Failed to connect to MongoDB:", error));

// User.insertMany(userData, { timeout: 30000 })
//     .then(() => console.log("User list added"))
//     .catch((error) => console.log("Failed to insert data:", error));
