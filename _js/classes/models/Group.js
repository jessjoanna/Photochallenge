var Group = Backbone.Model.extend({

	defaults: {
		"day": "",
		"start_date": "",
		"groupname": ""
	},

	urlRoot: 'api/group'

});

module.exports = Group;
