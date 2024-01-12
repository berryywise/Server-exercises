////IMPORT MODULES

let http = require('http');
let fs = require("fs")

// STATIC 404 PAGE ERROR

const NOT_FOUND_PATH = "./404.html"

//CREATE SERVER
http.createServer((req, res) => {

let parse = req.url;

//READ .HTML FILES IN ROOT DIRECTORY

  fs.readFile(`.${parse}`, (err, data) => {

    //IF ERROR RESPOND WITH 404 FAULTY PAGE

      if(err) {
        res.writeHead(404, {'Content-Type': 'text/html'})
        res.write(fs.readFileSync(NOT_FOUND_PATH));
        return res.end()
      }

      //IF NO ERROR RESPOND WITH 200 OK AND REQUESTED DATA

      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write(data);
      return res.end();

  })

  //ENABLE URL MODULE FOR CODE DOWN HERE


//   res.write(req.url)
//   res.write("<----- This is the current page where you are at!")
//   let date = url.parse(req.url, true).query;
//   let txt = `This is a test to see if ${date.id} and ${date.api_key} are working like it should! :)`;



}).listen(8080);

console.log('Server started on localhost:8080; press Ctrl-C to terminate...');


