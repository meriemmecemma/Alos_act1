var unirest = require("unirest")
var Request = unirest.get('http://localhost:3000/fact/i')

.body("{\"name\":M"}")
let body = [];
request.on('data', (chunk) => {
  body.push(chunk);
}).on('end', () => {
  body = Buffer.concat(body).toString();
  client.read({ search: { id: "<= 10S"} }).then(function(data) {
    console.log(data);
  }, function(err){
    console.log(err);
  });

  