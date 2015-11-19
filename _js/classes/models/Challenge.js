var Challenge = Backbone.Model.extend({

	defaults: {
		"group_id": "",
		"color_id": "",
		"object_id": "",
		"day": ""
	},

	urlRoot: 'api/challenges'

});

module.exports = Challenge;
