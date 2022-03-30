const userService = require('../services/user.service')

module.exports = {
    getAllUsers: (req, res) => {
        const users = userService.findAll();

        res.json(users);
    },

    createUser: (req, res) => {
        userService.insertUser(req.body);

        res.json('success');
    },

    getUserById: (req, res) => {
        const { user } = req;

        res.json(user);
    },

    deleteUserById: (req, res) => {
        const { user } = req;

        userService.deleteUserById(user.name);

        res.status(204).json(user)
    }
}