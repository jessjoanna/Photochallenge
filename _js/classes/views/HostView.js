template = require('../../../_hbs/host.hbs');

var UserVoteView = require('../views/UserVoteView.js');
var RatingCollection 	= require('../collections/RatingCollection.js');
var UserCollection 		= require('../collections/UserCollection.js');
var GroupCollection 	= require('../collections/GroupCollection.js');

var General = require('../views/GeneralView.js');

var collectionCount = 0;

var HostView = General.extend({
	template: template,

	events: {
		'click .vote_button': 'clickVote',
	},

	initialize: function(){
		console.log('init - HostView');

		this.collectionCount = 0;
		this.ratingCollection = new RatingCollection();

		this.setUser();
	},


	clickVote: function(e){

		e.preventDefault();
		this.groupCollection.forEach(this.save_song_rating, this);

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


	redirect: function(){
		collectionCount++;
		if(collectionCount === 3){
			window.voted = true;
			Window.Application.navigate('voted', {trigger: true});
		}
	},

	render: function(){
		if(window.voted === true){
			Window.Application.navigate('voted', {trigger: true});
			return;
		}

		console.log('render host');

		if(this.groupCollection == null){
			this.$el.html(this.template());
		} else {
			console.log(this.groupCollection);
			var cmsDay 			= this.groupCollection.models[0].attributes.day;
			var date 				= this.groupCollection.models[0].attributes.start_date;

			if(cmsDay === 0){

				this.groupCollection.models[0].attributes.day = this.daysBetween(this.getDateFromToday(0), date)-1;

			}else{

				this.groupCollection.models[0].attributes.day = this.getDay();
			}
			this.$el.html(this.template(this.groupCollection.models[0].attributes));
			this.renderUsers();
		}

		this.$users = this.$el.find('.players');
		return this;
	},

});

module.exports = HostView;
