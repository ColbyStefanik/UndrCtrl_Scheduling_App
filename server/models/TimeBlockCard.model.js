const mongoose = require('mongoose');

const TimeBlockCardSchema = new mongoose.Schema({
    gameName: {
        type: String,
        enum: ['Game 1','Game 2','Game 3', 'Gmae 4','Game 5'],
        required: [true, 'game name is required'],
    },
    date: {
        type: Date,
        required: [true, 'date is required'],
        //minlength: [5, 'date length should be more than 4 characters']
    },
    starTime: {
        type: Number,
        required: [true, 'start time is required'],
        min: [0, 'invalid start time'],
        max: [23, 'invalid start time']
    },
    endTime: {
        type: Number,
        required: [true, 'end time is required'],
        min: [1, 'invalid end time'],
        max: [24, 'invalid end time']
    },
    hostEmployee: {
        type: String,
        enum: ['Employee 1','Employee 2','Employee 3', 'Employee 4','Employee 5'],
        required: [true, 'Host employee is required'],
        // minlength: [3, 'host employee name should be more than 3 characters']
    },
    gmEmployee: {
        type: String,
        enum: ['Employee 1','Employee 2','Employee 3', 'Employee 4','Employee 5'],
        required: [true, 'Game master is required'],
        // minlength: [3, 'gm employee name should be more than 3 characters']
    }
    }, 
    {timestamps: true}
);

const TimeBlockCard = mongoose.model('TimeBlockCard', TimeBlockCardSchema);
module.exports = TimeBlockCard;