var template = require('../../../_hbs/groep.hbs');

var UserCollection = require('../collections/UserCollection.js');
var GroupCollection = require('../collections/GroupCollection.js');

var UserGroupView = require('./UserGroupView.js');

var User = require('../models/User.js');

var GroepOVerzichtView = Backbone.View.extend({

	template: template,
	className: 'groep',
	tagName: 'div',

	events: {
		'click .goGroup': 'clickGroup',
		'click .addMe': 'clickAdd',
		'click .user': 'clickUser'
	},

	initialize: function(){
		this.user = new UserCollection({user: 'self'});
		this.listenTo(this.user, 'sync', this.setGroup);
		this.user.fetch();

		this.groupCollection = new GroupCollection();
		this.listenTo(this.groupCollection, 'sync', this.renderGroups);
		this.groupCollection.fetch();


		this.userNow = new User();
	},

	renderGroups: function(){
		this.$players.empty();
		this.groupCollection.forEach(this.renderGroup, this);
	},

	renderGroup: function(model){
		console.log(model);
		var view = new UserGroupView({
			model: model
		});
		this.$players.append(view.render().el);
	},

	setGroup: function(){
		//console.log(this.user.models[0].attributes.id);
		//console.log(this.user.models[0]);


		this.userNow.set('id', this.user.models[0].attributes.id);

		this.userNow.fetch({
			success: function(model, response){
				if(response.length === 0){
					Window.Application.navigate('home', {trigger: true});
				}
			}
		});

	},

	clickAdd: function(e){
		e.preventDefault();
		console.log(this.model.get('id'));
		this.userNow.set('group_id', this.model.get('id'));
		this.userNow.save();
		Window.Application.navigate('group/' + this.model.get('id'), {trigger: true});

	},

	clickGroup: function(e){
		e.preventDefault();
		Window.Application.navigate('group/' + this.model.get('id'), {trigger: true});

	},

	clickUser: function(e){
		e.preventDefault();
		Window.Application.navigate('user/' + this.model.get('id'), {trigger: true});
	},

	render: function(){
		this.$el.html(this.template(this.model.attributes));
		this.$players = this.$el.find('.players');
		return this;
	}

});

module.exports = GroepOVerzichtView;
