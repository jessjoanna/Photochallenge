var User = require('../models/User.js');

var UserCollection = Backbone.Collection.extend({

	model: User,
	url: 'api/users/',

	initialize: function(options){

		if(options) {
			this.par = options.user;
		}
	},

	methodUrl: function(method) {

		if(method === "read" && this.par) {
			this.url = 'api/users/' + this.par;
			return;
		}
		this.url = 'api/users';
	},

	sync: function(method, model, options) {
		if(model.methodUrl && model.methodUrl(method.toLowerCase())) {
			options = options || {};
			options.url = model.methodUrl(method.toLowerCase());
		}
    Backbone.Collection.prototype.sync.apply(this, arguments);
	}

});

module.exports = UserCollection;
