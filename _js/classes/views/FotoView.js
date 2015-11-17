var template = require('../../../_hbs/foto.hbs');

var FotoView = Backbone.View.extend({

	template: template,
	tagName: 'li',

	render: function(){
		this.$el.html(this.template(this.model.attributes));
		return this;
	}

});

module.exports = FotoView;
