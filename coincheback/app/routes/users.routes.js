module.exports = (app) => {
    const users = require('../controllers/users.controller.js');

    // Create a new User
    app.post('/user', users.create);

    //Find all Users
    app.get('/users', users.findAll);

    // Retrieve a single User with pseudo and password
    app.post('/users/connect', users.findByPseudoAndPassword);

    // Delete a User with userID
    app.delete('/users/delete/:userId', users.delete);
};
