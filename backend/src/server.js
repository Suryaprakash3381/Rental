const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth.js');
const dotenv = require('dotenv');
dotenv.config(); 
console.log('Loaded JWT_SECRET:', process.env.JWT_SECRET)
const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/mydatabase';

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
console.log('Loaded JWT_SECRET:', process.env.JWT_SECRET)

// Routes
app.use('/api/v1/auth', authRoutes);

// MongoDB Connection
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Root route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
