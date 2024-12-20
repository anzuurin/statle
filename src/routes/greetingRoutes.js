const express = require('express');
const router = express.Router();
const greetingController = require('../controllers/greetingController');

router.get('/', greetingController.showGreetingForm);
router.post('/greet', greetingController.createGreeting);

module.exports = router;