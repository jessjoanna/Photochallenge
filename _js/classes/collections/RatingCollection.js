var Rating = require('../models/Rating.js');

var RatingCollection = Backbone.Collection.extend({

	model: Rating,
	url: 'api/rating/',

	initialize: function(options){
		if(options) {
			this.group_id = options.group_id;
		}
	},

	methodUrl: function(method) {
		if(method === "read" && this.group_id) {
			this.url = 'api/rating/' + this.group_id;
			return;
		}
		this.url = 'api/rating';
	},

	sync: function(method, model, options) {
		if(model.methodUrl && model.methodUrl(method.toLowerCase())) {
			options = options || {};
			options.url = model.methodUrl(method.toLowerCase());
		}
    Backbone.Collection.prototype.sync.apply(this, arguments);
	}

});

module.exports = RatingCollection;
