var pirateController = require('./controllers/pirates.js');
app.use("/pirates", pirateController);
var express = require("express");
var router = express.Router();
var pirates = require('../models/pirates.js');


router.get('/', (request, response) => {
    console.log('silly pirates')
    res.render('pirates/index', {
        pirates: pirates.PirateList
    })
})
router.get('/:id/new', (request, response => {
    res.render('pirates/new');
}));
router.post()