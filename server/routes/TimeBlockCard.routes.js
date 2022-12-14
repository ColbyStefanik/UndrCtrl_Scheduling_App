const TimeBlockCardController = require('../controllers/TimeBlockCard.controller');

module.exports = (app) => {
    app.get('/api/calendar', TimeBlockCardController.getTimeBlockCards);
    app.get('/api/calendar/range/:start/:end', TimeBlockCardController.getTimeBlockCardByRange); //YYYY-MM-DD/YYYY-MM-DD
    app.get('/api/calendar/week/:start/:end', TimeBlockCardController.getTimeBlockCardByRange); //YYYY-MM-DD/YYYY-MM-DD
    app.get('/api/calendar/day/:day', TimeBlockCardController.getTimeBlockCardByDay); //YYYY-MM-DD
    app.get('/api/calendar/month/:month', TimeBlockCardController.getTimeBlockCardByMonth); //YYYY-MM or YYYY-MM-DD
    app.get('/api/calendar/:id', TimeBlockCardController.getTimeBlockCardById);
    app.post('/api/calendar', TimeBlockCardController.createTimeBlockCard);
    app.put('/api/calendar/:id', TimeBlockCardController.updateTimeBlockCard);
    app.delete('/api/calendar/:id', TimeBlockCardController.deleteTimeBlockCard);
};