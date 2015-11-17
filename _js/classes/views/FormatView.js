var template = require('../../../_hbs/format.hbs');
var Album = require('../models/Album.js');
var AlbumCollection = require('../collections/AlbumCollection.js');
var AlbumView = require('./AlbumView.js');


var FormatView = Backbone.View.extend({

	template: template,
	tagName: 'section',
	className: 'detail',

	initialize: function(options) {


		if(options && options.id) {
			this.model = new Album();

			this.model.set('format', options.id);
			this.model.fetch({
				success: function(model, response) {
					if(response.length === 0) {
						Window.Application.navigate('albums', {trigger: true});
					}
				}
			});
			this.listenTo(this.model, "sync", this.render);

			this.format = new AlbumCollection({
				format: options.id
			});
			this.format.on('sync', this.renderAllOfFormat, this);
		}

	},


	renderAllOfFormat: function() {
		console.log('init');
		this.$format.empty();
		this.format.forEach(this.renderFormat, this);
	},

	renderFormat: function(format) {
		this.$format.append(new AlbumView({model: format}).render().el);
	},

	render: function() {
		this.$el.html(this.template(this.model.attributes));
		this.$format = this.$el.find('tbody');
		this.format.fetch();
		return this;
	}


});

module.exports = FormatView;

