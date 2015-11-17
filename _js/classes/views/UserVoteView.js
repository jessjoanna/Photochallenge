templat = require('../../../_hbs/user.hbs');

var UserView = Backbone.View.extend({

	templat: templat,
	className: 'user',
	tagName: 'li',

	render: function(){
		this.$el.html(this.templat(this.model.attributes));
		return this;
	}

});

module.exports = UserView;
