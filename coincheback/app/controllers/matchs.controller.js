const matchs = require('../models/matchs.model.js');

// Create and Save a new Match
exports.create = (req, res) => {

    // Create a Match
    const match = new matchs({
        team1name: req.body.team1name,
        team1point: req.body.team1point,
        team2name: req.body.team2name,
        team2point: req.body.team2point,
        userId: req.body.userId,
    });

    // Save Order in the database
    match.save()
        .then(match => {
            res.send(match);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Order."
        });
    });
};

// Retrieve and return all orders from the database.
exports.findAllMatchByUserId = (req, res) => {
    matchs.find({userId: req.params.userId})
        .then(match => {
            res.send(match);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving orders."
        });
    });
};
