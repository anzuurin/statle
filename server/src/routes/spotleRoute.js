const express = require('express');
const path = require('path');

const router = express.Router();

// renders connections form on screen
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/spotleScore.html'));
});

// takes user input, parses, returns score
router.post('/input', (req, res) => {
    const score = req.body.score;
    const scoreArray = score.split("\r\n");
    var passedSpotle = false;
    // checks if they got it right in the end
    if (scoreArray[2].slice(-2) ==="🟩" || scoreArray[2].slice(-2) ==="🎁") {
        passedSpotle = true;
        const guessCount = scoreArray[2].length-1; // for some reason, the last emoji adds 2 to the length
        res.json({ message: `You got the spotle in ${guessCount} guesses!` });
    }
    else {
        res.json({ message: `You did not get the spotle :(` });
    }
});

module.exports = router;