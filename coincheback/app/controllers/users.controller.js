const users = require('../models/users.model.js');

// Create and Save a new User
exports.create = (req, res) => {
    // Validate request
    if (!req.body.pseudo || !req.body.password) {
        return res.status(400).send({
            message: "User content can not be empty"
        });
    }

    // Create a User
    const user = new users({
        pseudo: req.body.pseudo,
        password: req.body.password,
    });

    // Save User in the database
    user.save()
        .then(user => {
            res.send(user);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the User."
        });
    });
};

// Retrieve and return all users from the database.
exports.findAll = (req, res) => {
    users.find()
        .then(user => {
            res.send(user);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving users."
        });
    });
};

saveUser = (users, res) => {
    users.save()
        .then(user => {
            res.send(user);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the User."
        });
    });
};

// Find a single user with a password and mail
exports.findByPseudoAndPassword = (req, res) => {

    const userCreate = new users({
        pseudo: req.params.pseudo,
        password: req.params.password,
    });

    users.find({pseudo: req.params.pseudo})
        .then(user => {
                if (!user[0]) {
                    saveUser(userCreate, res)
                } else {
                    if (user[0].password !== req.params.password) {
                        return res.status(404).send({
                            message: "Wrong password"
                        });
                    }
                    return res.send(user);
                }
            }
        ).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "user not found with mail or password"
            });
        }
        return res.status(500).send({
            message: "Error connecting user "
        });
    });

};

// Delete a user with the specified noteId in the request
exports.delete = (req, res) => {
    users.findByIdAndRemove(req.params.userId)
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: "User not found with id " + JSON.stringify(req.params.userId)
                });
            }
            res.send({message: "User deleted successfully!"});
        }).catch(err => {
        if (err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "User not found with id " + JSON.stringify(req.params.userId)
            });
        }
        return res.status(500).send({
            message: "Could not delete user with id " + JSON.stringify(req.params.userId)
        });
    });
};
