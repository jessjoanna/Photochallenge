var Foto = require('../models/Foto.js');

var FotoCollection = Backbone.Collection.extend({

	model: Foto,
	url: 'api/fotos/',

	initialize: function(options){
		if(options) {
			this.format = options.format;
		}
	},

	methodUrl: function(method) {
		if(method === "read" && this.format) {
			this.url = 'api/fotos/' + this.format;
			return;
		}
		this.url = 'api/fotos';
	},

	sync: function(method, model, options) {
		if(model.methodUrl && model.methodUrl(method.toLowerCase())) {
			options = options || {};
			options.url = model.methodUrl(method.toLowerCase());
		}
    Backbone.Collection.prototype.sync.apply(this, arguments);
	}

});

module.exports = FotoCollection;
