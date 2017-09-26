//npm install packages

const path = require('path');
const logger = require('morgan');
const express = require("express");
const routher = express.Router
const hbs =require('hbs');
const bodyParser =require('body-parser');


// setting settings, reticulating splines
const app = express()
const port = process.env.port || 3000;
var pirateController = require('./controllers/pirates.js');


//making connectins * log

app.use( logger("dev"));

app.use(bodyParser.urlencoded({extended: true}));

//view engine

app.set('view engine', 'hbs')

app.use( pirates, piratesController)


// Home screen
app.get('/', (req, res) => {
    res.send('Welcome to Pirate Bay')
})



//start server
app.listen(PORT, () => {
    console.info('SERVER UP AND RUNNING @', PORT, "//", new Date());
});