const express = require('express');
const { getAllHacks, createHack, updateHack, getSingleHacks, deleteHack, patchHack } = require('../handlers/hackHandler');

//create a instance of router
const hackRoute = express.Router()

/**Get all hacks */

hackRoute.get("/", getAllHacks)

/**Create hack */
hackRoute.post("/", createHack)

/**Update hack */
hackRoute.put("/:id",updateHack )

/**Get Single hack */
hackRoute.get("/:id",getSingleHacks )

/**Delete hack */
hackRoute.delete("/:id",deleteHack )

hackRoute.patch("/:id", patchHack)

module.exports = hackRoute