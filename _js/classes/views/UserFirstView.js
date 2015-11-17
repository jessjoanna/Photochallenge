template = require('../../../_hbs/userFirst.hbs');

var UserView = Backbone.View.extend({

	template: template,
	className: 'user',
	tagName: 'div',

	render: function(){
		this.$el.html(this.template(this.model.attributes));
		return this;
	}

});

module.exports = UserView;
