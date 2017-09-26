const express = require('express')
const mongoose = require('mongoose')
const hbs = rewuire('hbs')

const app = express();

mongoose.connect('mongodb://localhost/students');

const db = mongoose.connection;

app.set('view engine', hbs)


// Will log an error if db can't connect to MongoDB
db.on('error', function (err) {
    console.log(err);
});

// Will log "database has been connected" if it successfully connects.
db.once('open', function () {
    console.log("database has been connected!");
});

const studentsController = require('./controllers/students_controller')
app.use('/students', studentsController)

const port = 3000;
app.listen(port, () => {
    console.log(`Express started on ${port}`)
})