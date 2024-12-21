const path = require('path');

const showGreetingForm = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/wordleScore.html'));
};

const createGreeting = (req, res) => {
    const score = req.body.username;
    res.json({ message: `here is your score: ${score}!` });
};

module.exports = {
    showGreetingForm,
    createGreeting
};