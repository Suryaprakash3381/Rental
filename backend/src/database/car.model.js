const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    Carname: {
    type: String,
    required: true
    },
    Model : {
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
    }

})
module.exports = mongoose.model('Car', carSchema);