const express = require('express');
const connectToDB = require('./config/dbConnection');
const mongoose = require('mongoose');
const cors = require('cors');
const hackRoute = require('./routes/allRoutes');
const userRoute = require('./routes/userRoute');
const { getAllHacks } = require('./handlers/hackHandler');
const app = express();
const port = process.env.PORT || 3000; 
require('dotenv').config(); 

// CORS middleware configuration
// app.use(cors())
app.use(cors({
  origin: 'http://localhost:5173',
  methods: 'GET, POST, PATCH, PUT, DELETE',
  allowedHeaders: 'Content-Type, Authorization',
  credentials: true,
}));

// Parse JSON request bodies
app.use(express.json());

connectToDB()
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });

app.get('/ping', (req, res) => {
  res.send("pong");
});

app.get('/', (req, res) => {
  const isConnected = mongoose.connection.readyState === 1;
  res.send(`Database Connection Status: ${isConnected ? 'Connected' : 'Disconnected'}`);
});

// Routes
app.use("/api/data", hackRoute);
app.use("/api/users", userRoute);

app.listen(port, () => {
  console.log(`🚀 Server running on PORT: ${port}`);
});

