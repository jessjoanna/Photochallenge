var Foto = Backbone.Model.extend({

	defaults: {
		fotoname: "",
		day: "",
		user_id: "",
		group_id: ""
	},

	urlRoot: 'api/fotos'

});

module.exports = Foto;
