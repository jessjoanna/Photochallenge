template 							= require('../../../_hbs/vote.hbs');
var UserVoteView = require('../views/UserVoteView.js');
var GroupCollection 	= require('../collections/GroupCollection.js');
var UserCollection 		= require('../collections/UserCollection.js');
var RatingCollection 	= require('../collections/RatingCollection.js');

var General = require('../views/GeneralView.js');

var collectionCount = 0;

var VoteView = General.extend({
	template: template,

	events: {
		'click .vote_button': 'clickVote',
	},

	initialize: function(options){

		this.collectionCount = 0;
		this.ratingCollection = new RatingCollection();
		console.log('init - VoteView', options);
		this.setUser();

	},

	clickVote: function(e){

		e.preventDefault();
		this.groupCollection.forEach(this.save_song_rating, this);
		this.save_host_rating(this.redirect);

	},

	redirect: function(){
		collectionCount++;
		if(collectionCount === 5){
			window.voted = true;
			Window.Application.navigate('voted', {trigger: true});
		}
	},

	save_host_rating: function(){

		var rated_user 		= this.getDay();
		console.log( this.getDay() );
		var rated_user_id = this.groupCollection.models[rated_user].attributes.id;
		var group_id 			= this.groupCollection.models[rated_user].attributes.group_id;
		var sfeer 				= this.$el.find('.sfeer').val();
		var food 					= this.$el.find('.food').val();

		this.ratingCollection.create({
			user_id: this.userId,
			rating_item_id: 2,
			rating_score: sfeer,
			rated_user: rated_user_id,
			group_id: group_id
		}, { success: this.redirect });

		this.ratingCollection.create({
			user_id: this.userId,
			rating_item_id: 3,
			rating_score: food,
			rated_user: rated_user_id,
			group_id: group_id
		}, { success: this.redirect });
	},

	save_song_rating: function(model){

			if((model.attributes.id) !== this.user.models[0].attributes.id){

				var rated_user 	= model.attributes.user_id;
				var user_id 		= this.userId;
				var rating 			= this.$el.find('.zang_'+rated_user).val();
				var group_id 		= model.attributes.group_id;

				// console.log('group_id',model.attributes.group_id);

				this.ratingCollection.create({
					user_id: user_id,
					rating_item_id: 1,
					rating_score: rating,
					rated_user: rated_user,
					group_id: group_id
				}, { success: this.redirect });

			}

	},

	setUser: function(){
		this.user = new UserCollection({ user: 'self' });
		this.listenTo(this.user, 'sync', this.setGroup);
		this.user.fetch();
	},

	setGroup: function(){
		this.userId = this.user.models[0].attributes.id;
		this.groupCollection = new GroupCollection({ user_id: this.userId });
		this.listenTo(this.groupCollection, 'sync', this.render);
		this.listenTo(this.groupCollection, 'sync', this.renderUsers);
		this.groupCollection.fetch();
	},

	renderUsers: function(){
		this.$users.empty();
		this.groupCollection.forEach(this.renderUser, this);
	},

	renderUser: function(model){

		if(model.attributes.user_id !== this.userId){

			var view = new UserVoteView({
				model: model
			});

			this.$users.append(view.render().el);

		}
	},

	render: function(){
		if(window.voted === true){
			Window.Application.navigate('voted', {trigger: true});
			return;
		}

		console.log('render vote');

		if(this.groupCollection === undefined){
			this.$el.html(this.template());
		} else {

			var cmsDay 			= this.groupCollection.models[0].attributes.day;
			var date 				= this.groupCollection.models[0].attributes.start_date;

			if(cmsDay === 0){

				this.groupCollection.models[0].attributes.day = this.daysBetween(this.getDateFromToday(0), date)-1;

			}else{

				this.groupCollection.models[0].attributes.day = this.getDay();
			}

			this.$el.html(this.template(this.groupCollection.models[0].attributes));
			// this.renderUsers();
		}

		this.$users = this.$el.find('.players');
		return this;
	},

});

module.exports = VoteView;
