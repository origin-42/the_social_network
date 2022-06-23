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

    },
    // POST '/api/users/'
    async addNewUser(req, res) {

        try {
           
        const { username, email } = req.body
        const newUser = await new Users({ username, email });

        await newUser.save()

        !newUser ? 
            res.status(400).json({ message: "Couldn't save user to database", body: newUser }) : 
            res.status(201).json({ message: "User successfully saved", body: newUser })

        } catch (err) {
            res.status(500).json({ message: "Server error", body: err })
        }

    },
    // POST '/api/users/:userId/friends/:friendId'
    async addNewFriend(req, res) {

        try {
           
        const { userId, friendId } = req.params
        const newFriend = await Users.findOneAndUpdate({ _id: userId }, { $push: { friends: friendId } });

        // Friends is mutual (:
        await Users.findOneAndUpdate({ _id: friendId }, { $push: { friends: userId } });

        !newFriend ? 
            res.status(400).json({ message: "Couldn't add friend to user", body: newFriend }) : 
            res.status(201).json({ message: "friend successfully added!", body: newFriend })

        } catch (err) {
            res.status(500).json({ message: "Server error", body: err })
        }

    }
}