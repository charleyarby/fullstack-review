const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', {useMongoClient: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});

let repoSchema = mongoose.Schema({
 // TODO: your schema here!
  login: String,
  UserID: Number,
  reponame: String,
  stars: Number,
  repoID: Number,
 // unique: true
 });

let Repo = mongoose.model('Repo', repoSchema);


let save = (user, callback) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  var numberOfRepos=0;
  user.forEach((oneRepo) => {
    numberOfRepos++
    const filter = {repoID: oneRepo.id};
    const update = {
                    reponame: oneRepo.name,
                    login: oneRepo.owner.login,
                    stars: oneRepo['stargazers_count']};
    //await Repo.countDocuments(filter);
    Repo.findOneAndUpdate(filter, update, { new:true, upsert:true}, function(err, doc) {
      if(!err) {
        console.log("got repo");
      }
      if(err){
        console.log(err);
      }

    })
    if(numberOfRepos===user.length) {
    console.log(user.length)
    callback(user.length);
    }

  })
}
let findAll = (callback) => {
  Repo.find({})
      .sort({stars: 'descending'})
      .limit(25)
      .exec(callback);

}
module.exports.save = save;
module.exports.findAll = findAll;

var cb = function(err, docs) {
  callback(docs);
}
// numberOfRepos++
// var data = new Repo({repoID: oneRepo.id,
//                      reponame: oneRepo.name,
//                      login: oneRepo.owner.login,
//                      stars: oneRepo['stargazers_count'] });
//   Repo.count({repoID: oneRepo.id}, function( err, count) {
//     if(count>0){
//       return
//     } else{
//       data.save(()=>console.log("data successfully saved"));
//     }
//   })
//   if(numberOfRepos===user.length) {
//     console.log(user.length)
//     callback(user.length);
//   }