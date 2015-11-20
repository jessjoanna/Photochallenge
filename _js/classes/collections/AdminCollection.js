var Group = require('../models/Group.js');

var AdminCollection = Backbone.Collection.extend({

	model: Group,
	url: 'api/admin/'

});

module.exports = AdminCollection;
