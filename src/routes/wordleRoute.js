const express = require('express');
const router = express.Router();
const wordleController = require('../controllers/wordleController');

router.get('/', wordleController.showGreetingForm);
router.post('/input', wordleController.createGreeting);

module.exports = router;