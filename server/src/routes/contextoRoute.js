const express = require('express');
const path = require('path');

const router = express.Router();

// renders connections form on screen
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/contextoScore.html'));
});

// takes user input, parses, returns score
router.post('/input', (req, res) => {
    const score = req.body.score;
    const scoreArray = score.slice(22).split("\r\n"); // cuts off the beginning phrase because we don't need it
    console.log(scoreArray)
    // const contextoID = scoreArray[1].split(" ")[1] //grabs connection number of the day, will use later
    // const guessCount = scoreArray.slice(2).length
    // res.json({ message: `It took you ${guessCount} guesses to make all the connections!` });
});

module.exports = router;