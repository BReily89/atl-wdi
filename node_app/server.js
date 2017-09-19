const express =require('express');
const app = express();
const hbs = require('hbs');
app.get("/", (req, res) => {
console.log(req.query)
})



app.get('/math/:operator', (req, res) => {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);

  if(req.params.operator === "add"){
    res.send(`${num1 + num2}`)
  } else if (req.params.operator === "subtract"){
    res.send(`${num1 - num2}`)
  } else if (req.params.operator === "divide"){
    res.send(`${num1 / num2}`)
  } else if (req.params.operator === "multiply"){
    res.send(`${num1 * num2}`)
  } else {
    res.send("invalid")
  }

});

app.get('/greeting', (req, res) => {
    res.send('math.hbs');
  })
  app.get('/hello/:name', function(req, res) {
    res.send({
      params: req.params, 
      queries: req.query
    });
  });
  


const PORT = 3001;

app.listen(PORT, () => {
  console.log("Express is listening on port ", PORT)
});
