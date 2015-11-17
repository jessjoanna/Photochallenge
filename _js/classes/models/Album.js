var Album = Backbone.Model.extend({

	defaults: {
		"artist": "",
		"title": "",
		"format": "",
		"date": ""
	},

	urlRoot: 'api/albums'
	
});

module.exports = Album;