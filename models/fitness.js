const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const fitnessSchema = new Schema({
    exercise: [{
        type: {
            type: String},
        name: String,
        duration: Number,
        weight: Number,
        reps: Number,
        sets: Number,
        distance: Number,
    }],
    date: {
        type: Date,
        default: Date.now
    }
});

const Fitness = mongoose.model("Fitness", fitnessSchema);

module.exports = Fitness;