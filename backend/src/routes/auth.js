const express = require('express');
const User = require('../database/user.model.js');
const Car = require('../database/car.model.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();

// Register a user
router.post('/register', async (req, res) => {
    const { username, email, password, fullname } = req.body;
    console.log('📥 Register endpoint hit'); // ✅ Debug
    console.log('Request Body:', req.body); // ✅ Debug

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const existingUsername = await User.findOne({ username });
        if (existingUsername) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            fullname
        });

        await newUser.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error('❌ Registration error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Login a user
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
         console.log("📥 login endpoint hit");
    console.log("Request Body:", req.body);
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'Invalid credentials' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

       const token = jwt.sign({ userId: user._id }, 'CHJDCC_MJDFH49655', { expiresIn: '1d' });


        res.json({ token, email: user.email, username: user.username });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});



module.exports = router;


