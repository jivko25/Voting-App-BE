const router = require('express').Router();

const homeController = require('./controllers/homeController');
const proposalController = require('./controllers/proposalController');

router.use('/', homeController);
router.use('/proposals', proposalController);

module.exports = router;