const router = require('express').Router();

const { getUsers, getSpecificUser, addNewUser, addNewFriend, updateUser } = require('../../controllers/usersController')

// /api/users
router.route('/')
    .get(getUsers)
    .post(addNewUser)
    .put(updateUser)
    // `DELETE` to remove user by its `_id`
    // **BONUS**: Remove a user's associated thoughts when deleted.
    .delete()

// /api/users/:userId
router.route('/:userId')
    .get(getSpecificUser)

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId')
    .post(addNewFriend)
    // `DELETE` to remove a friend from a user's friend list
    .delete()

module.exports = router;