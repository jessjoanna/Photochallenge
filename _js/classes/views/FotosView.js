template = require('../../../_hbs/fotos.hbs');
var FotoCollection = require('../collections/FotoCollection.js');
var FotoView = require('./FotoView.js');

var FotosView = Backbone.View.extend({

	template: template,

	events: {
		'click .add': 'clickAddFoto',
		'change #imageInput': 'submitFoto'
	},

	initialize: function(){
		console.log('init - FotosView');
		this.fotoCollection = new FotoCollection();
		this.listenTo(this.fotoCollection, 'sync', this.renderFotos);
		this.fotoCollection.fetch();
	},

	renderFotos: function(){
		console.log('render fotos');
		this.$fotos.empty();
		this.fotoCollection.forEach(this.renderFoto, this);

	},

	renderFoto: function(model){
		console.log('render foto');

		var view = new FotoView({
			model: model
		});

		this.$fotos.append(view.render().el);

	},

	clickAddFoto: function(){
		var fileInput = $('#imageInput');
		fileInput.click();
	},

	submitFoto: function(e){
		e.preventDefault();

		var fd = new FormData(document.getElementById("form"));
		fd.append("action", "create");
		$.ajax({
		  url: "index.php?page=add_object",
		  type: "POST",
		  data: fd,
		  dataType: "json",
		  processData: false,
		  contentType: false,
		  context: this,
			success: function(data){

				document.getElementById("form").reset();
				this.initialize();

			},
			error: function(data){
				console.log(data.responseText);
			}
		});
	},

	render: function(){
		this.$el.html(this.template());
		this.$fotos = this.$el.find('.images');

		return this;
	},

});

module.exports = FotosView;
