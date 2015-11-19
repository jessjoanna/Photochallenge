var Object = require('../models/Object.js');

var ObjectCollection = Backbone.Collection.extend({

	model: Object,
	url: 'api/objects/'

});

module.exports = ObjectCollection;
