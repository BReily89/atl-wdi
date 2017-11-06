const express = require('express');

const router = express.Router();
const hbs = require('hbs');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;
const piratesController = require('/controllers/pirates')


app.listen(PORT, () => {
    console.info('SERVER UP AND RUNNING @', PORT, "//", new Date());
});