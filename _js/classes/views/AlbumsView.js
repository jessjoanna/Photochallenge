var AlbumCollection = require('../collections/AlbumCollection.js');
var AlbumView = require('./AlbumView.js');

var template = require('../../../_hbs/albums.hbs');

var AlbumsView = Backbone.View.extend({

	template: template,
	tagName: 'div',
	className: 'albums',

	events: {
		'click .album-submit': 'clickAdd'
	},

	clickAdd: function(e){

		e.preventDefault();
		var error = false;

		if(this.$el.find('.artist-input').val() === ""){

			$('.artist-input').addClass('error');
			error = true;
		}

		if (this.$el.find('.title-input').val() === ""){

			$('.title-input').addClass('error');
			error = true;
		}

		if (this.$el.find('.format-select').val() === ""){

			$('.format-select').addClass('error');
			error = true;
		}

		if(error){
			return;
		}

		this.collection.create({
   			artist: this.$el.find('.artist-input').val(),
   		 	title: this.$el.find('.title-input').val(),
   			format: this.$el.find('.format-select').val()
		});

		this.$el.find('.artist-input').val("");
		this.$el.find('.title-input').val("");
		this.$el.find('.format-select').val("");

	},

	initialize: function(){
		this.collection = new AlbumCollection();
		this.listenTo(this.collection, 'sync', this.renderAlbums);
		this.collection.fetch();
		console.log('init');

	},

	renderAlbums: function(){
		console.log('render albums');
		this.$albums.empty();
		this.collection.forEach(this.renderAlbum, this);
		$('.error').removeClass('error');
	},

	renderAlbum: function(model){
		console.log('render album');

		var view = new AlbumView({
			model: model
		});

		this.$albums.append(view.render().el);

	},

	render: function(){

		this.$el.html(this.template());
		this.$albums = this.$el.find('tbody');

		return this;

	}

});

module.exports = AlbumsView;
