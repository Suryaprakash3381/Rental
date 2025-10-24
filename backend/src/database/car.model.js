const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    Carname: {
        type: String,
        required: true
    },
    Model: {
        type: String,
        required: true
    },
    Year: {
        type: Number,
        required: true
    },
    Price: {
        type: Number,
        required: true
    },
    Image: {
        type: String,
        required: true
    },
    Description: {
        type: String
    },
    userId: { // <-- Add this field
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

module.exports = mongoose.model('Car', carSchema);