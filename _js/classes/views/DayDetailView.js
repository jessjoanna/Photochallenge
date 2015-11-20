var template = require('../../../_hbs/day.hbs');

var DayDetailView = Backbone.View.extend({

	template: template,

	render: function(){
		this.$el.html(this.template);
		return this;

	}

});


module.exports = DayDetailView;
