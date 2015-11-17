var Group = Backbone.Model.extend({

	defaults: {
		"user_id": "",
		"group_id": "",
		"day": "",
		"start_date": ""
	},

	urlRoot: 'api/group'

});

module.exports = Group;
