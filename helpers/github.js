const request = require('request');
const config = require('../config.js');
const db = require('../database/index.js')
let getReposByUsername = (user, callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    method:'get',
    url: `https://api.github.com/users/${user}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
 // console.log(user)
  request(options, (error, response, body)=> {
    if(error){
      console.log(error)
    }
    if(!error) {
    body = JSON.parse(body)
    db.save(body, function(res) {
      console.log(res, 'length of user repo')
      console.log('from database callback')
      callback();
    })

    }
  })
}

module.exports.getReposByUsername = getReposByUsername;