const express = require('express');
require('dotenv').config();
const session = require('express-session');
// const MongoStore = require('connect-mongo');
// const bcrypt = require('bcrypt');
// const saltRounds = 12;
const port = process.env.PORT || 3000;

const app = express(); // Move the declaration of 'app' here
// app.use(express.static(__dirname + '/public'));


// const Joi = require("joi");

app.get('*', (req, res) => {
    res.status(404).send("Page not found - 404");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
