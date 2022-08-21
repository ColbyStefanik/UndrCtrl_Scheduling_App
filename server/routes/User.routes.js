const UserController = require('../controllers/User.controller');

module.exports = (app) => {
    app.get('/api/calendar', UserController.getAllUsers);
    app.get('/api/calendar/:id', UserController.getUserById);
    app.post('/api/calendar', UserController.createUser);
    app.put('/api/calendar/:id', UserController.updateUser);
    app.delete('/api/calendar/:id', UserController.deleteUser);
    app.post('/api/calendar/login', UserController.login);
};
// module.exports = (app) => {
//     app.get('/api/user', UserController.getAllUsers);
//     app.get('/api/user/:id', UserController.getUserById);
//     app.post('/api/user', UserController.createUser);
//     app.put('/api/user/:id', UserController.updateUser);
//     app.delete('/api/user/:id', UserController.deleteUser);
//     app.post('/api/user/login', UserController.login);
// };