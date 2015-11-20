var HomeView 			= require('../views/HomeView.js');
var GroepDetailView = require('../views/GroepDetailView.js');
var DayDetailView = require('../views/DayDetailView.js');
var UserDetailView = require('../views/UserDetailView.js');

var Application = Backbone.Router.extend({

	routes: {
		"home": "home",
		"group/:groupname": "group",
		"day": "day",
		"user/:id": "user",
		"*actions": "default"
	},

	logout: function(){
		window.location.replace("index.php");
	},

	empty: function() {
		$('.container').empty();
	},

	home: function(){
		this.empty();
		this.home = new HomeView();
		$('.container').append(this.home.render().el);
	},

	group: function(groupname){
		this.empty();
		this.group = new GroepDetailView({
			groupname: groupname
		});
		$('.container').append(this.group.render().el);
	},

	day: function(){
		this.empty();
		this.day = new DayDetailView();
		$('.container').append(this.day.render().el);
	},

	user: function(id){
		this.empty();
		this.user = new UserDetailView({
			id: id
		});
		$('.container').append(this.user.render().el);
	},

	default: function () {
		this.navigate('home', {trigger: true});
	}

});

module.exports = Application;
