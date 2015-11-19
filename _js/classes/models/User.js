var User = Backbone.Model.extend({

	defaults: {
		"username": "",
		"picture": "",
		"password": "",
		"role": "",
		"group_id": 0
	},

	urlRoot: 'api/users'

});

module.exports = User;
