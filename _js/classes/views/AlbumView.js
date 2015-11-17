var template = require('../../../_hbs/album.hbs');

var AlbumView = Backbone.View.extend({

	template: template,
	tagName: 'tr',

	events: {
		'click .format': 'clickDetail',
		'click .delete': 'clickDelete'
	},

	clickDelete: function(e) {
		e.preventDefault();
		this.model.destroy();
	},

	initialize: function(){
		this.listenTo(this.model, 'destroy', this.remove);
	},

	clickDetail: function(e) {
		e.preventDefault();
		Window.Application.navigate('formats/' + this.model.get('format'), {trigger: true});
	},

	render: function(){
		this.$el.html(this.template(this.model.attributes));
		return this;
	}
	
});

module.exports = AlbumView;