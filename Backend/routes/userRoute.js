const express = require('express');
const { getAllUsers, createUser, updateUser, getSingleUser, deleteUser } = require('../handlers/userhandler');

// Create an instance of router
const userRoute = express.Router();

// Get all Users
userRoute.get("/", getAllUsers);

// Create User
userRoute.post("/", createUser);

// Update User
userRoute.put("/:id", updateUser);

// Get Single User
userRoute.get("/:id", getSingleUser);

// Delete User
userRoute.delete("/:id", deleteUser);

module.exports = userRoute;