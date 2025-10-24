const mongoose = require('mongoose');

const rentSchema = new mongoose.Schema({
    fullname :{
        type : String,
        required: true
    },
    age : {
        type : Number,
        required: true
    },
    contact : {
        type : String,
        required: true
    },
    pickupLocation : {
        type : String,
        required: true
    },
    dropLocation : {
        type : String,
        required: true
    },
    pickupDate : {
        type : Date,
        required: true
    },
    dropDate : {
        type : Date,
        required: true
    },
    carId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Car',
        required: true
    }
});

module.exports = mongoose.model('Rent', rentSchema);