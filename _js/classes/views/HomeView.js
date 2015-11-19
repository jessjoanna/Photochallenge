var template = require('../../../_hbs/home.hbs');

var GroupCollection = require('../collections/GroupCollection.js');

var GroepOverzichtView = require('../views/GroepOverzichtView.js');

var HomeView = Backbone.View.extend({

	template: template,
	tagName: 'section',
	className: 'groepen',

	events: {
		'click .add_group': 'clickAddGroup',
		'input .filter': 'inputFilter'
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

	inputFilter: function(e){
		e.preventDefault();
		var input = $(e.currentTarget).val().toLowerCase();
		// console.log(input);

		if(input !== ""){
			this.renderFilteredGroups(this.groupCollection.filterGroups(input));
		}else{
			this.groupCollection.fetch();
		}
	},

	navigateTo: function(location){
		Window.Application.navigate(location, {trigger: true});
	},

	renderFilteredGroups: function(groups){
		this.$groups.empty();
		groups.forEach(this.renderGroup, this);
	},

	renderGroups: function(){
		this.$groups.empty();
		this.groupCollection.forEach(this.renderGroup, this);
	},

	renderGroup: function(model){
		var view = new GroepOverzichtView({
			model: model
		});
		this.$groups.append(view.render().el);
	},

	render: function(){
		this.$el.html(this.template);
		this.$groups = this.$el.find('.tbody');
		return this;

	}

});


module.exports = HomeView;
