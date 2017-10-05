const http = require("http");
const urlParser = require("url"); // Adds urlParser
const server = http.createServer().listen(3001);

const funThings = ["HTML", "CSS", "jQuery", "Node"];
const movies = ["Grease", "Rocky Horror", "Les Mis"];

console.log("I'm listening on port: 3001");

server.on("request", function(request, response) {
  var urlObj = urlParser.parse(request.url); //
  var pathname = urlObj.pathname; // parsing out the important info in the url

  console.log("requested: " + pathname);
  response.writeHead(200, { "Content-Type": "text/html" });

  response.write("<html>");
  const message = "fun times";

  switch(pathname){
    case '/funtimes':
      response.write(`<h1>${fun_nodestuff}!</h1>`);
      response.write(`<ul>`);
      funThings.forEach(thing => {
        response.write(`<li>${thing}</li>`);
      });
      response.write(`</ul>`);
      break;
    case '/movies':
      response.write(`<h1>Movies!</h1>`);
      response.write(`<ul>`);
      movies.forEach(thing => {
        response.write(`<li>${thing}</li>`);
      });
      response.write(`</ul>`);
      break;
    case '/portfolio':
      response.write(`<h1>Coming Soon!</h1>`)
      break;
    default:
      response.write(`<h1>Not found!</h1>`)
      break;
  }
  
  response.write(
    '<script>console.log("I  \'m client-side JavaScript being sent via server-side JavaScript");</script>'
  );
  response.write("</html>");
  response.end();
});