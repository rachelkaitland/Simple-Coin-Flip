const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')


const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/api') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        let coin = Math.random()
        let result 
        let imgUrl
        if (coin < 0.5) {
          result = 'Heads!'
          imgUrl = 'https://c.tenor.com/a12klRG71JUAAAAC/heads.gif'
        } else {
          result = 'Tails!'
          imgUrl = 'https://c.tenor.com/ZjwTNJ07KfkAAAAd/batu-tails.gif'
        }
        const objToJson = {
        result: result,
        imgUrl: imgUrl
        }
        res.end(JSON.stringify(objToJson));
      }
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});


server.listen(8000);
