var template = require('../../../_hbs/scores.hbs');

var ScoresView = Backbone.View.extend({

	template: template,

	events: {
		'click .back': 'clickBack'
	},

	clickBack: function(e){
		e.preventDefault();
		Window.Application.navigate('day', {trigger: true});
	},

	render: function(){
		this.$el.html(this.template());
		return this;
	}



});

module.exports = ScoresView;
