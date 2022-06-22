const { ObjectId } = require('mongoose').Types;
const { Thoughts } = require('../models/Thoughts');

module.exports = {
    async getThoughts(req, res) {

        try {

        const thoughtsData = await Thoughts.find()

        !thoughtsData ? 
            res.status(400).json({ message: "Unable to retrieve thoughts", body: thoughtsData }) : 
            res.status(200).json({ message: "thoughts successfully retrieved", body: thoughtsData })

        } catch (err) {
            res.status(500).json({ message: "Server error", body: err })
        }
        
    }
}