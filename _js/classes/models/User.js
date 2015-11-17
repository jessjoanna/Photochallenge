var User = Backbone.Model.extend({

	defaults: {
		"username": "",
		// "name": "",
		// "lastname": "",
		"picture": "",
		"password": "",
		"role": ""
	},

	urlRoot: 'api/users'

});

module.exports = User;
