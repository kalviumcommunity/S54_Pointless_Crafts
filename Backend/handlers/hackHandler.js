// hackHandler.js

// Import necessary modules
const Hacks = require("../models/dataModel");

// Get all hacks
const getAllHacks = async (req, res) => {
    try {
        const allData = await Hacks.find({});
        res.status(200).json({ allData });
    } catch (error) {
        console.log("error: ", error);
        res.status(500).json({ message: "Error fetching hacks" });
    }
};

// Create a hack
const createHack = async (req, res) => {
    try {
        const body = req.body;
        const { title, category, videoUrl, timeDuration } = body;
        const postData = await Hacks.create(body);
        res.status(201).json({ message: "Hack Created", data: postData });
    } catch (error) {
        console.log("error: ", error);
        res.status(500).json({ message: "Error creating hack" });
    }
};

// Update a hack
const updateHack = async (req, res) => {
    try {
        const updatedHack = await Hacks.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedHack) {
            return res.status(404).json({ message: "Hack not found" });
        }
        res.status(200).json({ message: "Hack updated", data: updatedHack });
    } catch (error) {
        console.log("error: ", error);
        res.status(500).json({ message: "Error updating hack" });
    }
};

// Get a single hack
const getSingleHacks = async (req, res) => {
    try {
        const singleHack = await Hacks.findById(req.params.id);
        if (!singleHack) {
            return res.status(404).json({ message: "Hack not found" });
        }
        res.status(200).json({ singleHack });
    } catch (error) {
        console.log("error: ", error);
        res.status(500).json({ message: "Error fetching single hack" });
    }
};

// Delete a hack
const deleteHack = async (req, res) => {
    try {
        const deletedHack = await Hacks.findByIdAndDelete(req.params.id);
        if (!deletedHack) {
            return res.status(404).json({ message: "Hack not found" });
        }
        res.status(200).json({ message: "Hack deleted" });
    } catch (error) {
        console.log("error: ", error);
        res.status(500).json({ message: "Error deleting hack" });
    }
};

// Export handler functions
module.exports = { getAllHacks, createHack, updateHack, getSingleHacks, deleteHack };
