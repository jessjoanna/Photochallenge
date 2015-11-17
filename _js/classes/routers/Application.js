var HomeView 			= require('../views/HomeView.js');
var FotosView 		= require('../views/FotosView.js');
var HostView 			= require('../views/HostView.js');
var VoteView 			= require('../views/VoteView.js');
var VotedView 		= require('../views/VotedView.js');
var WinnerView 		= require('../views/WinnerView.js');
var GeneralView 	= require('../views/GeneralView.js');

var UserCollection = require('../collections/UserCollection.js');
var GroupCollection = require('../collections/GroupCollection.js');

var Application = Backbone.Router.extend({

	routes: {
		"general": "general",
		"home": "home",
		"host/:day": "host",
		"vote/:day": "vote",
		"voted": "voted",
		"winner": "winner",
		"fotos": "fotos",
		"*actions": "initialize"
	},

	initialize: function(){
		this.setUser();
	},

	leadZero: function(num){
		if(parseInt(num) <= 9){
			return "0"+num;
		}
		return num;
	},

	setUser: function(){
		this.user = new UserCollection({ user: 'self' });
		this.listenTo(this.user, 'sync', this.setGroup);
		this.listenTo(this.user, 'error', this.logout);
		this.user.fetch();
	},

	logout: function(){
		window.location.replace("index.php");
	},

	setGroup: function(){
			var userId = this.user.models[0].attributes.id;
			this.groupCollection = new GroupCollection({ user_id: userId });
			this.listenTo(this.groupCollection, 'sync', this.checkDay);
			this.groupCollection.fetch();
	},

getDateFromToday: function(val){

	var fullDate = new Date();
	fullDate.setDate(fullDate.getDate() + val);

	return fullDate.format("yyyy-mm-dd");

},

	checkDay: function(){

		var players 		= this.groupCollection.pluck('id').count();
		var cmsDay 			= this.groupCollection.models[0].attributes.day;
		var date 				= this.groupCollection.models[0].attributes.start_date;

		if(players < 4){
			console.log('groep nog niet compleet');
			Window.Application.navigate('home', {trigger: true});

		} else {

			if((cmsDay === 0 && date === this.getDateFromToday(0)) || cmsDay === 1){
				Window.Application.navigate('home', {trigger: true});

			} else if((cmsDay === 0 && date === this.getDateFromToday(-6)) || cmsDay === 6) {
					console.log('final day');
					Window.Application.navigate('winner', {trigger: true});

			} else {

				if(cmsDay === 0){
					var day 		= this.daysBetween(this.getDateFromToday(0), date)-1;
				}else{
					var day 		= this.getDay();
				}

				var userId 	= this.userPosition();



				if(window.voted === true){
					console.log('voted');
					Window.Application.navigate('voted', {trigger: true});
				} else if(day !== userId){
					Window.Application.navigate('vote/' + day, {trigger: true});
				} else {
					Window.Application.navigate('host/' + day, {trigger: true});
				}

			}

		}

	},

	parseDate: function(input) {
  	var parts = input.match(/(\d+)/g);
		return new Date(parts[0], parts[1]-1, parts[2]);
	},

	daysBetween: function(date1, date2){

    var oneDay 		= 1000 * 60 * 60 * 24;
    var date1_ms 	= this.parseDate(date1).getTime();
    var date2_ms 	= this.parseDate(date2).getTime();

    var difference_ms = Math.abs(date1_ms - date2_ms);

    return Math.round(difference_ms/oneDay);
	},

	userPosition: function(){

		for (var i = 0; i < this.groupCollection.models.length; i++) {

			if((this.groupCollection.models[i].attributes.id) === this.user.models[0].attributes.id){

			 	return this.user.models[0].attributes.id;
			} else {
				console.log('compared '+(this.groupCollection.models[i].attributes.id)+' with '+this.user.models[0].attributes.id);
			}
		}
	},

	getDay: function(){
		var day = this.groupCollection.models[0].attributes.day;

		if(day !== 0){
			return day-1;
		}
	},

	empty: function() {
		$('.container').empty();
	},

	default: function () {
		console.log('404 - default');
		this.navigate('general', {trigger: true});
	},

	home: function(){
		this.empty();
		this.home = new HomeView();
		$('.container').append(this.home.render().el);
	},

	general: function(){
		this.empty();
		this.general = new GeneralView();
		$('.container').append(this.general.render().el);
	},

	fotos: function(){
		this.empty();
		this.fotos = new FotosView();
		$('.container').append(this.fotos.render().el);
	},

	host: function(id){
		this.empty();
		this.host = new HostView({
			id: id
		});
		$('.container').append(this.host.render().el);
	},

	vote: function(id){

			this.empty();
			this.vote = new VoteView({
				id: id
			});
			$('.container').append(this.vote.render().el);

	},

	voted: function(id){
		this.empty();
		this.vote = new VotedView();
		$('.container').append(this.vote.render().el);
	},

	winner: function(){
		this.empty();
		this.winner = new WinnerView();
		$('.container').append(this.winner.render().el);
	}

});

module.exports = Application;
