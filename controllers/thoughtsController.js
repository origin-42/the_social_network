const { ObjectId } = require('mongoose').Types;
const { Thoughts } = require('../models/Thoughts');
const { Users } = require('../models/Users');

module.exports = {
    // GET '/api/thoughts'
    async getThoughts(req, res) {

        try {

        const thoughtsData = await Thoughts.find()

        !thoughtsData ? 
            res.status(400).json({ message: "Unable to retrieve thoughts", body: thoughtsData }) : 
            res.status(200).json({ message: "thoughts successfully retrieved", body: thoughtsData })

        } catch (err) {
            res.status(500).json({ message: "Server error", body: err })
        }
        
    },
    // GET '/api/thoughts/:thoughtId'
    async getThought(req, res) {

        try {

        const thoughtData = await Thoughts.findOne({ _id: req.params.thoughtId })

        !thoughtData ? 
            res.status(400).json({ message: "Unable to retrieve thought", body: thoughtData }) : 
            res.status(200).json({ message: "thought successfully retrieved", body: thoughtData })

        } catch (err) {
            res.status(500).json({ message: "Server error", body: err })
        }
        
    },
    // POST '/api/thoughts/'
    async addThought(req, res) {

        try {

        const { thoughtText, username, userId } = req.body

        let newThought = new Thoughts({ thoughtText, username, user: [userId] });
        await newThought.save()

        if (!newThought)
            res.status(400).json({ message: "Unable to add thought", thought: newThought })

        const theUser = await Users.findOneAndUpdate({ _id: Object(userId) }, { $push: { thoughts: newThought } });
    
        !theUser ?
            res.status(400).json({ message: "Unable to update thought to user", user: theUser }) :
            res.status(201).json({ message: "Thought successfully added", body: newThought, user: theUser })

        } catch (err) {
            console.log(err)
            res.status(500).json({ message: "Server error", body: err })
        }
        
    },
    // POST '/api/thoughts/:thoughtId/reactions'
    async addReaction(req, res) {

        try {

        const { reactionBody, username } = req.body
        const { thoughtId } = req.params

        const newReaction = await Thoughts.findOneAndUpdate({ _id: thoughtId }, { $push: { reactions: [{ reactionBody, username }] } }, { new: true });

        !newReaction ?
            res.status(400).json({ message: "Unable to update reaction to thought", thought: newReaction }) :
            res.status(201).json({ message: "Reaction to thought added", thought: newReaction })

        } catch (err) {
            res.status(500).json({ message: "Server error", body: err })
        }
        
    },
    // PUT '/api/thoughts'
    async updateThought(req, res) {

        try {

        const { thoughtText, username, thoughtId } = req.body
        const thoughtUpdate = await Thoughts.findOneAndUpdate({ _id: thoughtId }, { thoughtText, username }, { runValidators: true, new: true })

        !thoughtUpdate ?
            res.status(400).json({ message: "Unable to update thought", thought: thoughtUpdate }) :
            res.status(201).json({ message: "Thought updated", thought: thoughtUpdate })

        } catch (err) {
            console.log(err)
            res.status(500).json({ message: "Server error", body: err })
        }
        
    },
    // DELETE '/api/thoughts/:thoughtId'
    async deleteThought(req, res) {

        try {

        const { thoughtId } = req.params
        const { userId } = req.body

        const thoughtToRemove = await Thoughts.findOneAndRemove({ _id: thoughtId }, { new: true })

        const updateUser = await Users.findOneAndUpdate({ userId }, { $pull: { thoughts: { _id: thoughtId } } }, { new: true });

        if (!thoughtToRemove)
            res.status(400).json({ message: "Unable to remove thought", thought: updateUser })

        !updateUser ?
            res.status(400).json({ message: "Unable to remove thought", thought: thoughtToRemove }) :
            res.status(200).json({ message: "Thought removed successfully", thought: thoughtToRemove, user: updateUser })

        } catch (err) {
            console.log(err)
            res.status(500).json({ message: "Server error", body: err })
        }
        
    },
    // DELETE '/api/thoughts/:thoughtId/reactions/:reactionId'
    async deleteReaction(req, res) {

        try {

        const { thoughtId, reactionId } = req.params

        const removeReaction = await Thoughts.findOneAndUpdate({ _id: thoughtId }, { $pull: { reactions: { _id: reactionId } } });
        
        !removeReaction ?
            res.status(400).json({ message: "Unable to remove reaction", thought: removeReaction }) :
            res.status(200).json({ message: "Reaction removed successfully", thought: removeReaction })

        } catch (err) {
            console.log(err)
            res.status(500).json({ message: "Server error", body: err })
        }
        
    }
}