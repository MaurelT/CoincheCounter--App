const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    pseudo: String,
    password: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('users', UserSchema);
