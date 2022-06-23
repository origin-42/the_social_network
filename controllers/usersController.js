const { ObjectId } = require('mongoose').Types;
const { Users } = require('../models/Users');

module.exports = {
    // GET '/api/users'
    async getUsers(req, res) {

        try {

        const userData = await Users.find()

        !userData ? 
            res.status(400).json({ message: "Unable to retrieve users", body: userData }) : 
            res.status(200).json({ message: "Users successfully retrieved", body: userData })

        } catch (err) {
            res.status(500).json({ message: "Server error", body: err })
        }

    },
    // GET '/api/users/:userId'
    async getSpecificUser(req, res) {

        try {
            
        const userData = await Users.findOne({ _id: req.params.userId })

        !userData ? 
            res.status(400).json({ message: "Unable to retrieve user", body: userData }) : 
            res.status(200).json({ message: "User successfully retrieved", body: userData })

        } catch (err) {
            res.status(500).json({ message: "Server error", body: err })
        }

    }
}