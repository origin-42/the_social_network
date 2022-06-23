const { ObjectId } = require('mongoose').Types;
const { Thoughts, Users } = require('../models/Thoughts');

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

        const { thoughtText, username, user, userId } = req.body
        const newThought = new Thoughts({ thoughtText, username });
        await newThought.save()

        if (!newThought)
            res.status(400).json({ message: "Unable to add thought", thought: newThought })
// theUSer function not working - .
// TypeError: Cannot read properties of undefined (reading 'findOneAndUpdate') 
        const theUser = await Users.findOneAndUpdate({ _id: userId }, { $addToSet: { thoughts: newThought } }, { runValidators: true, new: true });

        !theUser ?
            res.status(400).json({ message: "Unable to update thought to user", user: theUser }) :
            res.status(201).json({ message: "Thought successfully added", body: newThought, user: theUser })

        } catch (err) {
            res.status(500).json({ message: "Server error", body: err })
        }
        
    },
    // POST '/api/thoughts/:thoughtId/reactions'
    async addReaction(req, res) {

        try {

        const { reactionBody, username } = req.body
        const { thoughtId } = req.params

        const newReaction = await Thoughts.findOneAndUpdate({ _id: thoughtId }, { $push: { reactions: { reactionBody, username } } });

        !newReaction ?
            res.status(400).json({ message: "Unable to update reaction to thought", reaction: newReaction }) :
            res.status(201).json({ message: "Reaction to thought added", reaction: newReaction, thought: thoughtId })

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
        
    }
}