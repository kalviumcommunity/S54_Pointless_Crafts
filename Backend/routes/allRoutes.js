const express = require('express');
const { getAllHacks, createHack, updateHack, getSingleHacks, deleteHack, patchHack } = require('../handlers/hackHandler');

//create a instance of router
const hackRoute = express.Router()

/**Get all Contacts */

hackRoute.get("/", getAllHacks)

/**Create Contact */
hackRoute.post("/", createHack)

/**Update Contact */
hackRoute.put("/:id",updateHack )

/**Get Single Contact */
hackRoute.get("/:id",getSingleHacks )

/**Delete Contact */
hackRoute.delete("/:id",deleteHack )

hackRoute.patch("/:id", patchHack)

module.exports = hackRoute