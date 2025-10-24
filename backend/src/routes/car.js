const express = require('express');
const Car = require('../database/car.model.js');
const Rent = require('../database/rent.model.js'); // <-- Import your Rent model
const router = express.Router();

// Get all cars
router.get('/', async (req, res) => {
    try {
        const cars = await Car.find();
        res.json(cars);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Get car by ID
router.get('/:id', async (req, res) => {
    try {
        const car = await Car.findById(req.params.id);
        if (!car) return res.status(404).json({ message: 'Car not found' });
        res.json(car);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Book a car (create a rent entry)
router.post('/:id/booking', async (req, res) => {
    const { fullname, age, contact, pickupLocation, dropLocation, pickupDate, dropDate } = req.body;

    try {

        if (age < 20) {
            return res.status(400).json({ message: 'Age must be at least 20' });
        }
        const car = await Car.findById(req.params.id);
        if (!car) return res.status(404).json({ message: 'Car not found' });

        // Create and save the rent entry in MongoDB
        const rent = new Rent({
            fullname,
            age,
            contact,
            pickupLocation,
            dropLocation,
            pickupDate,
            dropDate,
            carId: car._id // Save the car's ObjectId
        });

        await rent.save();

        res.status(201).json({ message: 'Rent created successfully', rent });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

// Get rent details by rentId
router.get('/rent/:rentId', async (req, res) => {
    try {
        const rent = await Rent.findById(req.params.rentId).populate('carId');
        if (!rent) return res.status(404).json({ message: 'Rent not found' });
        res.json({ rent });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;