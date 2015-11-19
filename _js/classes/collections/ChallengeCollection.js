var Challenge = require('../models/Challenge.js');

var ChallengeCollection = Backbone.Collection.extend({

	model: Challenge,
	url: 'api/challenges/'

});

module.exports = ChallengeCollection;
