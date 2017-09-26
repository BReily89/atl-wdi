
var express = require('express');
var app     = express();
var port    = 3000;

app.get('/greeting', function(req, res){
    console.log(req.query)
    
    const hbs= require('hbs');
    app.set('view engine', 'hbs');
    app.set('views', '/views');
    
    res.render('greeting',{
        data: req.query.saying

    });
});
app.get('/topping/:mushroom', function(req, res, next){
var mushroom
    res.send('/topping')
});
app.get('/order/:amount/:size', function(req, res, next) {
    var numPizzas = 5;
    var sizeOf = large;
    res.send('/order','sizeOf','numPizzas',);
});
    


app.listen(port, function(){
  console.log("==========================")
  console.log('LISTENING ON PORT ' + port);
  console.log("==========================")
});