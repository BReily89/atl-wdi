const express =require('express');
const app = express();
const hbs = require('hbs');

app.set('view engine', 'hbs');
app.use(express.static(__dirname +'/public'));



app.get('/shows', (req, res) =>  {
    var shows =['Lost', 'Desperate House Wives', 'Shameless', 'Bachelor in Paradise'];
    
app.get('/shows',function(req, res) {
      
res.render('shows', {
    shows: shows
});
})





const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log('hello-express is listening ' + PORT);
})})
