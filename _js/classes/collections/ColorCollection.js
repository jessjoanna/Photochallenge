var Color = require('../models/Color.js');

var ColorCollection = Backbone.Collection.extend({

	model: Color,
	url: 'api/colors/'

});

module.exports = ColorCollection;
