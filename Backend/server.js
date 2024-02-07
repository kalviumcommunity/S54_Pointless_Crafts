const express = require('express');
const connectDB = require('./config/dbConnection');
const app = express();
const port = process.env.PUBLIC_PORT || 3000;
require('dotenv').config();

app.get('/ping', (req, res)=>{
  res.send("pong")
})

// connectDB()

if (require.main === module) {
  app.listen(port, () => {
    console.log(`🚀 server running on PORT: ${port}`);
  });
}

module.exports = app;
