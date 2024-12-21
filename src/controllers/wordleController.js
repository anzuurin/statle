const path = require('path');

const showWordleForm = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/wordleScore.html'));
};

// parses input text and returns just the score
const createWordleScore = (req, res) => {
    const score = req.body.username;
    const scoreArray = score.split(" ")[2].split("\r\n")[0];
    res.json({ message: `here is your score: ${scoreArray}!` });
};

module.exports = {
    showWordleForm,
    createWordleScore
};