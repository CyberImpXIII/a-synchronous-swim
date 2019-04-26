const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');
const keypressHandler = require('./keypressHandler');
// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      console.log(chunk)
        body += chunk.toString();
    });
    req.on('end', () => {
        res.writeHead(200, 'success' ,headers);
        res.end(body.toLowerCase());
    });
}
};

//const randomDirectionMessage = () => keypressHandler.validMessages[Math.floor(Math.random() * 4)]