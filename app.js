var _ = require('lodash');
var config = require('./config.js');
var fs = require('fs');
var argv = require('boring')();
var request = require('request-promise');
var Promise = require('bluebird');

Promise.map(config.transfers, function(transfer) {
  return Promise.try(function() {
    return request('https://api.github.com/orgs/' + transfer.to + '/teams', {
      headers: {
        accept: 'application/vnd.github.nightshade-preview+json',
        'user-agent': 'github-change-ownership-in-bulk'
      },
      json: true,
      qs: {
        access_token: config.token
      }
    });
  })
  .then(function(teams) {
    var teamIds = [];
    _.each(transfer.teams, function(team) {
      var actualTeam = _.find(teams, function(actualTeam) {
        return (actualTeam.name === team) || (actualTeam.slug === team);
      });
      if (!actualTeam) {
        throw new Error('Cannot find team ' + team + ' in the organization ' + transfer.to);
      }
      teamIds.push(actualTeam.id);
    });
    return Promise.map(transfer.repos, function(repo) {
      console.log('transferring ' + repo + ' from ' + config.from + ' to ' + transfer.to);
      return request('https://api.github.com/repos/' + config.from + '/' + repo + '/transfer', {
        method: 'POST',
        headers: {
          accept: 'application/vnd.github.nightshade-preview+json',
          'user-agent': 'github-change-ownership-in-bulk'
        },
        qs: {
          access_token: config.token
        },
        json: true,
        body: {
          new_owner: transfer.to,
          team_id: [ teamIds ]
        }
      });
    });
  });
})
.then(function() {
  console.log('Done');
});

function testrequest() {
  console.log(JSON.stringify(arguments, null, '  '));
  return Promise.resolve(true);
}

