const express = require('express');
const session = require('express-session');
const router = require('express').Router();
const path = require('path');

require('dotenv').config();

const app = express();

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + '/static')));
app.use(express.static(path.join(__dirname, '/scripts')));
app.use(express.static(path.join(__dirname, '/scripts/modules')));

const get_status = require('./scripts/routes/other/getstatus.js');

app.use(get_status);

app.listen(process.env.APP_PORT, () => {
    console.log("\x1b[32m");
    console.log(`Server is running on http://localhost:${process.env.APP_PORT}`);
    console.log("\x1b[0m");
    console.log('Access it now...');
});