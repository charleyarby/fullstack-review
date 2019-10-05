const express = require('express');
const bodyParser = require('body-parser')
const getReposByUsername = require('../helpers/github.js')
const repo = require('../database/index.js')
let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.post('/users', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  const username = req.body.term;
  getReposByUsername.getReposByUsername(username, function() {
    console.log('from the callback inside getReposby username')
    res.send('got the repos from github')
  })
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  repo.findAll( (allRepo) => {
    //console.log(res)
    var repoName = [];
    res.send(allRepo);

  })

});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

