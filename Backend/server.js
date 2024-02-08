const express = require('express');
const connectToDB = require('./config/dbConnection');
const mongoose = require('mongoose')
const app = express();
const port = process.env.PUBLIC_PORT || 3000;
require('dotenv').config();

app.get('/ping', (req, res)=>{
  res.send("pong")
})



connectToDB()
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Failed to connect to MongoDB', err);
    });

if (require.main === module) {
  app.listen(port, () => {
    console.log(`🚀 server running on PORT: ${port}`);
  });
}

app.get('/', (req, res) => {
  const isConnected = mongoose.connection.readyState === 1;
  res.send(`Database Connection Status: ${isConnected ? 'Connected' : 'Disconnected'}`);
});

module.exports = app;
