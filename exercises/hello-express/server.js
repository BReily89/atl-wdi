const express = require('express');
const app = express(); //representing our entire web server
const hbs = require('hbs');

app.set('view engine', 'hbs');//getting handlebars into server/engine
app.use(express.static(__dirname +'/public'));

app.get('/todos', function(req, res){
    //do stuff
});

app.get('/todos/:id', function(req, res){
    //do stuff
});

app.get('/todos/:id/edit', function(req, res){
    //do stuff
});


app.get('/greeting', (req, res) => {
    console.log(req.query);

    res.render('greeting', {
        saying: req.query.saying,
        name: 'Brandon'
    });
});
    app.get('/favorite-foods', function(req, res) {
        var favoritefoods = ['All food', 'No discrimination'];

        res.render('favorite-foods', {
            favoritedfoods: favoritefoods,
        
    });
})
const PORT = process.env.PORT || 3000;
//process.env.PORT is an evironment variable (changes depending upon the client)
app.listen(PORT, () => {
    console.log('hello-express is listening ' + PORT);
});