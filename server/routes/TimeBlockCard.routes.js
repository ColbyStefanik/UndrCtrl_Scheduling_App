const TimeBlockCardController = require('../controllers/TimeBlockCard.controller');

module.exports = (app) => {
    app.get('/api/timeblockcard', TimeBlockCardController.getTimeBlockCards);
    app.get('/api/timeblockcard/:id', TimeBlockCardController.getTimeBlockCardById);
    app.post('/api/timeblockcard', TimeBlockCardController.createTimeBlockCard);
    app.put('/api/timeblockcard/:id', TimeBlockCardController.updateTimeBlockCard);
    app.delete('/api/timeblockcard/:id', TimeBlockCardController.deleteTimeBlockCard);
};