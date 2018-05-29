const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  name: String,
  full_name: String,
  forks_count: Number,
  html_url: String,
  _id: Number,
  id: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repoArray, callback) => {

  repoArray.forEach((repo) => {
    var repo = new Repo(repo);
    repo._id = repo.id;
    repo.save((err) => {
      if (err) {
        console.log(err);
      } else {
        callback();
      }
    });
  });

}

let getTop25  = (callback) => {
  Repo.find()
      .limit(25)
      .sort({forks_count: 'desc'})
      .exec(callback)
}


module.exports.save = save;
module.exports.getTop25 = getTop25;
