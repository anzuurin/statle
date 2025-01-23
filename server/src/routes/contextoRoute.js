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
    
    function calculateScore(scoreArray) {
        // Extract the main text from the first element
        const mainText = scoreArray[0];
      
        // Check if the user gave up
        const gaveUpMatch = /gave up in (\d+) guesses/.exec(mainText);
        if (gaveUpMatch) {
          return 0; // Score is 0 if the user gave up
        }
        // Extract guesses and hints
        const guessesMatch = /got it in (\d+) guesses/.exec(mainText);
        const hintsMatch = /(\d+) hints?/.exec(mainText);

        const guesses = guessesMatch ? parseInt(guessesMatch[1], 10) : 0;
        const hints = hintsMatch ? parseInt(hintsMatch[1], 10) : 0;

        // Calculate score: Start with a base score of 500, subtract guesses and hints penalties
        // Adjust the scoring formula as needed
        const score = Math.max(0, 500 - guesses * 2 - hints * 10);
        return score;
    }
    const playerScore = calculateScore(scoreArray);
    
    const contextoID = scoreArray[0].split(" ")[0] //grabs contexto number of the day, will use later
    const guessArray = scoreArray.slice(2,5) //grabs the guesses represented as emojis and numbers, will use for react rendering later i think
    
    res.json({ message: `Your contexto score is ${playerScore}` });
});

module.exports = router;