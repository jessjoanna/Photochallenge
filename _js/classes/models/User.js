var User = Backbone.Model.extend({

	defaults: {
		"username": "",
		"picture": "",
		"password": "",
		"role": ""
	},

	urlRoot: 'api/users'

});

module.exports = User;
