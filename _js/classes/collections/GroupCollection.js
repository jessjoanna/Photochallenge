var Group = require('../models/Group.js');

var GroupCollection = Backbone.Collection.extend({

	model: Group,
	url: 'api/group/',

	initialize: function(options){
		if(options) {
			this.user_id = options.user_id;
		}
	},

	comparator: function(object) {
		return object.get("id");
	},

	methodUrl: function(method) {
		if(method === "read" && this.user_id) {
			this.url = 'api/group/' + this.user_id;
			return;
		}
		this.url = 'api/group';
	},

	sync: function(method, model, options) {
		if(model.methodUrl && model.methodUrl(method.toLowerCase())) {
			options = options || {};
			options.url = model.methodUrl(method.toLowerCase());
		}
    Backbone.Collection.prototype.sync.apply(this, arguments);
	}

});

module.exports = GroupCollection;
