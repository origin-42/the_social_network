const router = require('express').Router();

const { getThoughts } = require('../../controllers/thoughtsController')

// /api/thoughts
router.route('/')
    // `GET` to get all thoughts
    // `GET` to get a single thought by its `_id`
    .get(getThoughts)
    // `POST` to create a new thought (don't forget to push the created thought's `_id` to the associated user's `thoughts` array field)
    .post()
    // `PUT` to update a thought by its `_id`
    .put()
    // `DELETE` to remove a thought by its `_id`

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions')
    // `POST` to create a reaction stored in a single thought's `reactions` array field
    .post()
    // `DELETE` to pull and remove a reaction by the reaction's `reactionId` value
    .delete()

module.exports = router;