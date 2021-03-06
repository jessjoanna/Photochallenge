var template = require('../../../_hbs/home.hbs');

var GroupCollection = require('../collections/GroupCollection.js');
var UserCollection = require('../collections/UserCollection.js');

var GroepOverzichtView = require('../views/GroepOverzichtView.js');
var User = require('../models/User.js');


var HomeView = Backbone.View.extend({

	template: template,
	tagName: 'section',
	className: 'groepen',

	events: {
		'click .add': 'clickAddGroup',
		'input .filter': 'inputFilter'
	},

	initialize: function(){
		this.user = new UserCollection({user: 'self'});
		this.listenTo(this.user, 'sync', this.setGroup);
		this.user.fetch();

		this.userNow = new User();

		this.groupCollection = new GroupCollection();
		this.listenTo(this.groupCollection, 'sync', this.renderGroups);
		this.groupCollection.fetch();
	},

	setGroup: function(){
		this.userNow.set('id', this.user.models[0].attributes.id);

		this.userNow.fetch({
			success: function(model, response){
				if(response.length === 0){
					Window.Application.navigate('home', {trigger: true});
				}
			}
		});
	},

	clickAddGroup: function(e){
		e.preventDefault();
		if(this.$el.find('.groupname').val() === ""){
			this.$el.find('.groupname').addClass('error');
		}

		this.groupCollection.create({
			groupname: this.$el.find('.groupname').val(),
			day: 0,
			start_date: moment().format('YYYY-MM-DD')
		});

		this.userNow.set('group_id', this.groupCollection.length);
		this.userNow.save();
		Window.Application.navigate('group/' + this.groupCollection.length, {trigger: true});
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
		this.$groups = this.$el.find('.groups');
		return this;

	}

});


module.exports = HomeView;
