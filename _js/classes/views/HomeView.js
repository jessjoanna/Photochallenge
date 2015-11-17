var template = require('../../../_hbs/home.hbs');

var UserCollection = require('../collections/UserCollection.js');
var GroupCollection = require('../collections/GroupCollection.js');
var UserFirstView = require('../views/UserFirstView.js');

var HomeView = Backbone.View.extend({

	template: template,
	tagName: 'div',
	className: 'deelnemers',

	events: {
		'click .vote': 'clickVote',
		'click .host': 'clickHost',
		'click .winner': 'clickWinner',
	},

	initialize: function(){
		this.setUser();
	},

	setUser: function(){
		this.user = new UserCollection({ user: 'self' });
		this.listenTo(this.user, 'sync', this.setGroup);
		this.user.fetch();
	},

	setGroup: function(){
		console.log('setGroup', this.user.models[0].attributes.id);
		var userId = this.user.models[0].attributes.id;
		this.groupCollection = new GroupCollection({ user_id: userId });
		this.listenTo(this.groupCollection, 'sync', this.renderUsers);
		this.groupCollection.fetch();
	},

	clickHost: function(e){
		e.preventDefault();
		this.navigateTo('host');
	},

	clickVote: function(e){
		e.preventDefault();
		this.navigateTo('vote');
	},

	clickWinner: function(e){
		e.preventDefault();
		this.navigateTo('winner');
	},

	navigateTo: function(location){
		Window.Application.navigate(location, {trigger: true});
	},

	renderUsers: function(){
		this.$users.empty();
		this.groupCollection.forEach(this.renderUser, this);
	},

	renderUser: function(model){
		var view = new UserFirstView({
			model: model
		});

		this.$users.append(view.render().el);
	},

	render: function(){

		this.$el.html(this.template());
		this.$users = this.$el.find('.tbody');
		return this;

	}

});


module.exports = HomeView;
