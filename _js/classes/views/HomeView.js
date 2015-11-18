var template = require('../../../_hbs/home.hbs');

var GroupCollection = require('../collections/GroupCollection.js');

var GroepOverzichtView = require('../views/GroepOverzichtView.js');

var HomeView = Backbone.View.extend({

	template: template,
	tagName: 'section',
	className: 'groepen',

	events: {
		'click .add_group': 'clickAddGroup',
	},

	initialize: function(){
		this.groupCollection = new GroupCollection();
		this.listenTo(this.groupCollection, 'sync', this.renderGroups);
		this.groupCollection.fetch();
	},

	clickAddGroup: function(e){
		e.preventDefault();
		this.navigateTo('addGroup');
	},

	navigateTo: function(location){
		Window.Application.navigate(location, {trigger: true});
	},

	renderGroups: function(){
		this.$users.empty();
		this.groupCollection.forEach(this.renderGroup, this);
	},

	renderGroup: function(model){
		var view = new GroepOverzichtView({
			model: model
		});
		this.$users.append(view.render().el);
	},

	render: function(){
		this.$el.html(this.template);
		this.$users = this.$el.find('.tbody');
		return this;

	}

});


module.exports = HomeView;
