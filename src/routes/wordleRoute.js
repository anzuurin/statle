const express = require('express');
const router = express.Router();
const wordleController = require('../controllers/wordleController');

router.get('/', wordleController.showWordleForm);
router.post('/input', wordleController.createWordleScore);

module.exports = router;