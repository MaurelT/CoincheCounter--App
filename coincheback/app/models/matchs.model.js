const mongoose = require('mongoose');

const MatchSchema = mongoose.Schema({
    team1name: String,
    team1point: String,
    team2name: String,
    team2point: String,
    userId: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('matchs', MatchSchema);
