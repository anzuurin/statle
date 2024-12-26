const express = require('express');
const path = require('path');

const router = express.Router();

// renders strands form on screen
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/strandsScore.html'));
});

// takes user input, parses, returns score
router.post('/input', (req, res) => {
    const score = req.body.score;
    const scoreArray = score.split("\r\n");
    let guesses = 0;
    console.log(scoreArray)
    for (let i = 2; i < scoreArray.length; i++) {
        const row = Array.from(scoreArray[i]);
        for (let j = 0; j < row.length; j++) {
            if (row[j] === "💡") {
                guesses ++;
            }
        }
      }
    res.json({ message: `You needed ${guesses} hints to finish the strands!` });
});

module.exports = router;