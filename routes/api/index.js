const router = require('express').Router();
const thoughtsRoutes = require('./thoughtsRoutes');
const userRoutes = require('./userRoutes');

router.use('/users', thoughtsRoutes);
router.use('/thoughts', userRoutes);

module.exports = router;
