const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const resourceRoute = require('./routes/resourceRoute'); 
const authRoute = require('./routes/authentication'); 
const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI, {
 
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

// Routes
app.use('/api/resources', resourceRoute);
app.use('/api/auth', authRoute);

app.use((req, res, next) => {
  console.log(`📩 ${req.method} ${req.url}`);
  next();
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app; // Export the app for testing purposes
