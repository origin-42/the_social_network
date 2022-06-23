const router = require('express').Router();

const { getUsers, getSpecificUser, addNewUser, addNewFriend, updateUser, deleteUser, deleteFriend } = require('../../controllers/usersController')

// /api/users
router.route('/')
    .get(getUsers)
    .post(addNewUser)
    .put(updateUser)
    // **BONUS**: Remove a user's associated thoughts when deleted. ??

// /api/users/:userId
router.route('/:userId')
    .get(getSpecificUser)
    .delete(deleteUser)

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId')
    .post(addNewFriend)
    .delete(deleteFriend)

module.exports = router;