template = require('../../../_hbs/voted.hbs');

var General = require('../views/GeneralView.js');

var WinnerView = General.extend({

	template: template,

	events: {
		'click .fotos': 'clickFoto',
	},

	initialize: function(){
		console.log('init - WinnerView');
	},

	render: function(){
		this.$el.html(this.template());
		return this;
	},

});

module.exports = WinnerView;
