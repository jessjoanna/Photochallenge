var template = require('../../../_hbs/player.hbs');

var UserGroupView = Backbone.View.extend({

	template: template,


	render: function(){
		this.$el.html(this.template(this.model.attributes));
		return this;
	}



});

module.exports = UserGroupView;
