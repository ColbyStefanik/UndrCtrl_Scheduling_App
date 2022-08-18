const mongoose = require('mongoose');

const TimeBlockCardSchema = new mongoose.Schema({
    game_name: {
        type: String,
        required: [true, 'game name is required'],
        minlength: [4, 'game name length should be more than 3 characters']
    },date: {
        type: Date,
        required: [true, 'date is required'],
        //minlength: [5, 'date length should be more than 4 characters']
    },
    start_time: {
        type: Number,
        required: [true, 'start time is required'],
        min: [0, 'invalid start time'],
        max: [23, 'invalid start time']
    },
    end_time: {
        type: Number,
        required: [true, 'end time is required'],
        min: [1, 'invalid end time'],
        max: [24, 'invalid end time']
    },
    host_employee: {
        type: String,
        required: [true, 'host employee is required'],
        minlength: [3, 'host employee name should be more than 3 characters']
    },
    gm_employee: {
        type: String,
        required: [true, 'gm employee is required'],
        minlength: [3, 'gm employee name should be more than 3 characters']
    }
    }, 
    {timestamps: true}
);

const TimeBlockCard = mongoose.model('TimeBlockCard', TimeBlockCardSchema);
module.exports = TimeBlockCard;