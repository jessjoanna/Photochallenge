var AdminCollection = require('../collections/AdminCollection.js');
var AdminGroupView = require('./AdminGroupView.js');

var AdminView = Backbone.View.extend({

	className: 'group',
	tagName: 'ul',

	events: {

	},

	initialize: function(){ console.log("admin init");

		this.adminCollection = new AdminCollection();
		this.listenTo(this.adminCollection, 'sync', this.renderGroups);
		this.adminCollection.fetch();

	},

	renderGroups: function(){ console.log("admin rendergroups");
		this.adminCollection.forEach(this.renderGroup, this);
	},

	renderGroup: function(model){ console.log("admin >rendergroup");
		var view = new AdminGroupView({
			model: model
		});
		this.$el.append(view.render().el);
	},

	render: function(){
		return this;
	}

});

module.exports = AdminView;
