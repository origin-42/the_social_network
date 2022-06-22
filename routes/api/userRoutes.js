const router = require('express').Router();

const {  } = require('../../controllers/usersController')

// /api/users
router.route('/')
    // `GET` all users
    // `GET` a single user by its `_id` and populated thought and friend data
    .get()
    // `POST` a new user:
    .post()
    // `PUT` to update a user by its `_id`
    .put()
    // `DELETE` to remove user by its `_id`
    // **BONUS**: Remove a user's associated thoughts when deleted.
    .delete()

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId')
    // `POST` to add a new friend to a user's friend list
    .post()
    // `DELETE` to remove a friend from a user's friend list
    .delete()

module.exports = router;