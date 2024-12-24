const app = require('./src/app'); //imports app
const PORT = process.env.PORT || 3000;

// starts the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});