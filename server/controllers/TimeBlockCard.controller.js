const TimeBlockCard = require('../models/TimeBlockCard.model');

module.exports = {
    getTimeBlockCards: (req, res) => {
        TimeBlockCard.find({})
        .then((timeBlockCards) => {
            res.json(timeBlockCards);
        })
        .catch((err) => {
            console.log('ERROR IN Get all TimeBlockCards', err);
            res.status(400).json({ message: 'something went wrong in find all TimeBlockCards', error: err });
        });
    },
    getTimeBlockCardById: (req, res) => {
        TimeBlockCard.findOne({ _id: req.params.id })
        .populate('hostEmployee')
        .populate('gmEmployee')
        .then((timeBlockCard) => {
            res.json(timeBlockCard);
        })
        .catch((err) => {
            console.log('ERROR IN Get TimeBlockCard by ID', err);
            res.status(400).json({ message: 'something went wrong in find TimeBlockCard by ID', error: err });
        });
    },
    getTimeBlockCardByMonth: (req, res) => {
        let start = new Date(req.params.month);
        let month = start.getMonth() + 3;
        let year = start.getFullYear();
        let end = new Date(year +"-"+month);

        TimeBlockCard.find({date: {"$gte": start, "$lt": end}})
        .then((timeBlockCards) => {
            res.json(timeBlockCards);
        })
        .catch((err) => {
            console.log('ERROR IN Get TimeBlockCard by Month', err);
            res.status(400).json({ message: 'something went wrong in find TimeBlockCard by Month', error: err });
        });
    },
    getTimeBlockCardByDay: (req, res) => {
        TimeBlockCard.find({date: new Date(req.params.day)})
        .then((timeBlockCards) => {
            res.json(timeBlockCards);
        })
        .catch((err) => {
            console.log('ERROR IN Get TimeBlockCard by Day', err);
            res.status(400).json({ message: 'something went wrong in find TimeBlockCard by Day', error: err });
        });
    },
    getTimeBlockCardByRange: (req, res) => {
        TimeBlockCard.find({date: {"$gte": new Date(req.params.start), "$lt": new Date(req.params.end)}})
        .then((timeBlockCards) => {
            res.json(timeBlockCards);
        })
        .catch((err) => {
            console.log('ERROR IN Get TimeBlockCard by Month', err);
            res.status(400).json({ message: 'something went wrong in find TimeBlockCard by Month', error: err });
        });
    },
    createTimeBlockCard: (req, res) => {
        TimeBlockCard.create(req.body)
        .then((timeBlockCard) => {
            res.status(201).json(timeBlockCard);
        })
        .catch((err) => {
            console.log('ERROR IN create TimeBlockCard', err);
            res.status(400).json({ message: 'something went wrong in create TimeBlockCard', error: err });
        });
    },
    updateTimeBlockCard: (req, res) => {
        TimeBlockCard.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then((timeBlockCard) => {
            res.json(timeBlockCard);
        })
        .catch((err) => {
            console.log('ERROR IN update TimeBlockCard', err);
            res.status(400).json({ message: 'something went wrong in update TimeBlockCard', error: err });
        });
    },
    deleteTimeBlockCard: (req, res) => {
        TimeBlockCard.deleteOne({ _id: req.params.id })
        .then((timeBlockCard) => {
            res.json(timeBlockCard);
        })
        .catch((err) => {
            console.log('ERROR IN delete TimeBlockCard', err);
            res.status(400).json({ message: 'something went wrong in delete TimeBlockCard', error: err });
        });
    }
};