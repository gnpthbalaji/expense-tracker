const { type } = require('mocha/lib/utils');
const mongoose = require('mongoose');


const incomeSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    description: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        default: 'income'
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    category: {
        type: String,
        required: true,
    }
},{timestamps: true});

module.exports = mongoose.model('Income', incomeSchema);