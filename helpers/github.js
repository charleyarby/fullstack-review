const request = require('request');
const config = require('../config.js');
//const save = require('../database/index.js')
let getReposByUsername = (user) => {
  console.log('save')
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${user}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
 // console.log(user)
  request(options, (error, response, body)=> {console.log('hi')})
}

module.exports.getReposByUsername = getReposByUsername;