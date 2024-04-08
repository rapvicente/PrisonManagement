const express = require('express')
const router = express.Router()

const guardController = require('../controllers/guardController')

//get all list of prisoners
router.get('/guards', guardController.guards)

router.get('/guards/:id', guardController.guard)

router.get('/search/guard', guardController.searchingOfGuard)

router.get('/remove/guard/:id', guardController.removalOfGuard)

module.exports = router;