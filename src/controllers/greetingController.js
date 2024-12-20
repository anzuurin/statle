const path = require('path');

const showGreetingForm = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/greetingForm.html'));
};

const createGreeting = (req, res) => {
    const name = req.body.username;
    res.json({ message: `Hello ${name}!` });
};

module.exports = {
    showGreetingForm,
    createGreeting
};