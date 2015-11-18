var template = require('../../../_hbs/add_group.hbs');
var GroupCollection = require('../collections/GroupCollection.js');
var UserCollection = require('../collections/UserCollection.js');
var User = require('../models/User.js');

var GroupAddView = Backbone.View.extend({

	template: template,
	tagName: 'section',
	className: 'group-add',

	events: {
		'click .add': 'clickAdd'
	},

	initialize: function(){
		this.groupCollection = new GroupCollection();

		this.listenTo(this.groupCollection, 'sync', this.renderGroups);

		this.groupCollection.fetch();

		this.setUser();
	},

	setUser: function(){
		this.user = new UserCollection({ user: 'self'});
		this.listenTo(this.user, 'sync', this.renderUsers);
		this.user.fetch();

		console.log(this.user.models.group_id);
	},

	renderGroups: function(){
		console.log("aantal groepen:" + this.groupCollection.length);
	},

	renderUsers: function(){
		this.userNow = this.user.models[0].attributes.group_id;
	},

	clickAdd: function(e){
		e.preventDefault();
		if(this.$el.find('.groupname').val() === ""){
			this.$el.find('.groupname').addClass('error');
		}

		this.groupCollection.create({
			groupname: this.$el.find('.groupname').val(),
			day: 0,
			start_date: moment().format('YYYY-MM-DD')
		});

		//Window.Application.navigate('group/' + this.groupCollection.last().attributes.groupname, {trigger: true});
		Window.Application.navigate('home', {trigger: true});

	},

	render: function(){
		this.$el.html(this.template);
		return this;
	}


});

module.exports = GroupAddView;
