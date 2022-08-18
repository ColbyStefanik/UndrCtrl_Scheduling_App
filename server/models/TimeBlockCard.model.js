const mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectId;

const TimeBlockCardSchema = new mongoose.Schema({
    gameName: {
        type: String,
        enum: ['Game 1','Game 2','Game 3', 'Game 4','Game 5'],
        required: [true, 'game name is required'],
    },
    date: {
        type: Date,
        required: [true, 'date is required'],
        //minlength: [5, 'date length should be more than 4 characters']
    },
    startTime: {
        type: String, // Date schema type of Mongoose represents not just a date, but a full date and time timestamp,
        required: [true, 'start time is required'],
        // min: [0, 'invalid start time'],
        // max: [23, 'invalid start time']
    },
    endTime: {
        type: String,// 
        required: [true, 'end time is required'],
        // min: [1, 'invalid end time'],
        // max: [24, 'invalid end time']
    },
    hostEmployee: { 
        type : ObjectId, 
        ref: "User",
    },
    gmEmployee: { 
        type : ObjectId, 
        ref: "User",
    }
    }, 
    {timestamps: true}
);

const TimeBlockCard = mongoose.model('TimeBlockCard', TimeBlockCardSchema);
module.exports = TimeBlockCard;