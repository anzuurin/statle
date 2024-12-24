const express = require('express');
const path = require('path');

const router = express.Router();

// renders wordle form on screen
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/wordleScore.html'));
});

// takes user input, parses, returns score
router.post('/input', (req, res) => {
    const score = req.body.score;
    const scoreArray = score.split(" ")[2].split("\r\n")[0];
    res.json({ message: `here is your score: ${scoreArray}!` });
});

module.exports = router;