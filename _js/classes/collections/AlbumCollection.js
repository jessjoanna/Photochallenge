var Album = require('../models/Album.js');

var AlbumCollection = Backbone.Collection.extend({

	model: Album,
	url: 'api/albums/',

	initialize: function(options){
		if(options) {
			this.format = options.format;
		}
	},

	// comparator: function(object) {
	// 	return object.get("artist");
	// },

	methodUrl: function(method) {
		if(method === "read" && this.format) {
			this.url = 'api/albums/' + this.format;
			return;
		}
		this.url = 'api/albums';
	},

	sync: function(method, model, options) {
		if(model.methodUrl && model.methodUrl(method.toLowerCase())) {
			options = options || {};
			options.url = model.methodUrl(method.toLowerCase());
		}
    Backbone.Collection.prototype.sync.apply(this, arguments);
	}

});

module.exports = AlbumCollection;
