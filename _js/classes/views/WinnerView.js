template = require('../../../_hbs/winner.hbs');

var GroupCollection 	= require('../collections/GroupCollection.js');
var UserCollection 		= require('../collections/UserCollection.js');
var ratingCollection 	= require('../collections/ratingCollection.js');

var General = require('../views/GeneralView.js');

var WinnerView = General.extend({

	template: template,

	events: {
		'click .foto': 'clickFoto',
	},

	initialize: function(){
		console.log('init - WinnerView');
		this.getUser();
	},

	getUser: function(){
		this.user = new UserCollection({ user: 'self' });
		this.listenTo(this.user, 'sync', this.getGroup);
		this.user.fetch();
	},

	getGroup: function(){
		this.userId = this.user.models[0].attributes.id;
		this.groupCollection = new GroupCollection({ user_id: this.userId });
		this.listenTo(this.groupCollection, 'sync', this.getScores);
		this.groupCollection.fetch();
	},

	getScores: function(){
		var groupId = this.groupCollection.models[0].attributes.group_id;
		console.log(groupId);
		this.ratingCollection = new ratingCollection({ group_id: groupId });
		this.listenTo(this.ratingCollection, 'sync', this.calculateScores);
		this.ratingCollection.fetch();
	},

	calculateScores: function(){

		this.scoreList = [];

		this.ratingCollection.forEach(this.calculateScore, this);

		this.winnerScore = this.scoreList.max();
		this.winnerId = this.scoreList.max('key');

		console.log(this.scoreList.max());
		console.log(this.scoreList.max('key'));

		this.winner = new UserCollection({ user: this.winnerId });
		this.listenTo(this.winner, 'sync', this.render);
		this.winner.fetch();

	},

	calculateScore: function(i){

		var rated_user = parseInt(i.attributes.rated_user);
		var rating = parseInt(i.attributes.rating_score);

		if(!this.scoreList[rated_user]){
			this.scoreList[rated_user] = rating;
		} else {
			this.scoreList[rated_user] += rating;
		}

	},


	render: function(){
		console.log('this.winner' ,(this.winner));
		if(this.winner === undefined){
			this.$el.html(this.template());
		} else {

			this.winner.models[0].attributes.score = this.winnerScore;
			this.$el.html(this.template(this.winner.models[0].attributes));
			console.log(this.winner.models[0].attributes);
		}
		return this;
	},

});

module.exports = WinnerView;
