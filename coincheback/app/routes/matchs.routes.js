module.exports = (app) => {
    const matchs = require('../controllers/matchs.controller.js');

    // Create a new Order
    app.post('/match', matchs.create);

    // Retrieve all Orders by userID
    app.get('/matchs/:userId', matchs.findAllMatchByUserId);

};
