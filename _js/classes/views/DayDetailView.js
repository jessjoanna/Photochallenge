var template = require('../../../_hbs/day.hbs');

var FotoCollection = require('../collections/FotoCollection.js');
var FotoView = require('./FotoView.js');

var DayDetailView = Backbone.View.extend({

	template: template,

	events: {
		'click .foto': 'clickFoto',
		'change #imageInput': 'submitFoto'
	},

	initialize: function(){
		this.fotoCollection = new FotoCollection();
		this.listenTo(this.fotoCollection, 'sync', this.renderFotos);
		this.fotoCollection.fetch();
	},

	renderFotos: function(){
		this.fotoCollection.forEach(this.renderFoto, this);
	},

	renderFoto: function(model){
		this.$fotos.empty();
		var view = new FotoView({
			model: model
		});
		this.$fotos.append(view.render().el);
	},

	clickFoto: function(e){
		e.preventDefault();
		var fileInput = $('#imageInput');
		fileInput.click();
	},

	submitFoto: function(e){
		e.preventDefault();

		var fd = new FormData(document.getElementById('file-form'));
		fd.append('action', 'create');
		$.ajax({
			url: 'index.php?page=add_object',
			type: 'POST',
			data: fd,
			dataType: 'json',
			processData: false,
			contentType: false,
			context: this,
			success: function(data){
				document.getElementById('file-form').reset();
				this.initialize();
			},
			error: function(data){
				console.log(data.responseText);
			}
		});

		console.log(fd);
	},

	render: function(){
		this.$el.html(this.template);
		this.$fotos = this.$el.find('.fotos');
		return this;

	}

});


module.exports = DayDetailView;
