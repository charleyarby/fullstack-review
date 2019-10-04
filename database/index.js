const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema(
  {
  // TODO: your schema here!
  user1login: {
    reponame: ['aaa', 'bbb']
  },
  user2login: {
    reponame: ['aaa', 'bbb']
  }
  }
);

let Repo = mongoose.model('Repo', repoSchema);

let save = (/* TODO */) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;