template = require('../../../_hbs/user.hbs');

var UserView = Backbone.View.extend({

	template: template,
	className: 'user',
	tagName: 'li',

	render: function(){
		this.$el.html(this.template(this.model.attributes));
		return this;
	}

});

module.exports = UserView;
