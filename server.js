// var http = require('http');

// http.createServer(function (req, res) {
//   res.write('Hello World!'); 
//   res.end(); 
// }).listen(3000);

import inquirer from 'inquirer';
import qr from'qr-image';
import fs from 'fs';
inquirer
  .prompt([
    {"name": 'URL', 'message': 'Enter your url '}
  ])
  .then((answers) => {
  var url = answers.URL
  var qr_png = qr.image(url);
  qr_png.pipe(fs.createWriteStream('google.png'));
  console.log(url)
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

