const express = require('express');
const github = require('../helpers/github.js');
const bodyParser = require('body-parser');
const mongo = require('../database/index');

let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.text());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  github.getReposByUsername(req.body, (data) => {
    var data = JSON.parse(data);
    
    mongo.save(data, (err) => {
      if (err) {
        console.log(err);
      } else {
        res.send()
      }
    });
  });
});

app.get('/repos', function (req, res) {
  mongo.getTop25((err, data) => {
    res.send(data);
  })
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
