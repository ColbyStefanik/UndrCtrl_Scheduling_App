const TimeBlockCardController = require('../controllers/TimeBlockCard.controller');

module.exports = (app) => {
    app.get('/api/calendar', TimeBlockCardController.getTimeBlockCards);
    app.get('/api/calendar/day/:day', TimeBlockCardController.getTimeBlockCardByDay);
    app.get('/api/calendar/month/:month', TimeBlockCardController.getTimeBlockCardByDay);
    app.get('/api/calendar/:id', TimeBlockCardController.getTimeBlockCardById);
    app.post('/api/calendar', TimeBlockCardController.createTimeBlockCard);
    app.put('/api/calendar/:id', TimeBlockCardController.updateTimeBlockCard);
    app.delete('/api/calendar/:id', TimeBlockCardController.deleteTimeBlockCard);
};