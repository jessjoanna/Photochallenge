var template = require('../../../_hbs/admin_detail.hbs');

var AdminGroupView = Backbone.View.extend({

	template: template,
	tagName: 'li',

	events: {
		'click .add-day': 'addDay'
	},

	addDay: function(e){ console.log("addDay");
		e.preventDefault();

		this.model.set({day: this.model.get('day') + 1});
		this.model.save({}, {url:'api/group/' + this.model.get('id')});

		Window.Application.navigate('admin/', {trigger: true});
	},

	render: function(){
		this.$el.html(this.template(this.model.attributes));
		return this;
	}

});

module.exports = AdminGroupView;
