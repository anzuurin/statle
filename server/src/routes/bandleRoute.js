const express = require('express');
const path = require('path');

const router = express.Router();

// renders connections form on screen
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/bandleScore.html'));
});

// takes user input, parses, returns score
router.post('/input', (req, res) => {
    const score = req.body.score;
    const scoreArray = score.split(" ");
    const bandleID = scoreArray[1] //grabs bandle number of the day, will use later
    const guessCount = scoreArray[2].charAt(0); //grabs the number of guesses
    const bandleScore = scoreArray[2].split("\r\n")[1]; //grabs the score in emojis, will use for later
    res.json({ message: `It took you ${guessCount} guesses to get the bandle!` });
});

module.exports = router;