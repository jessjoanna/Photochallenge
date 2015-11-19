var HomeView 			= require('../views/HomeView.js');
var GroepDetailView = require('../views/GroepDetailView.js');

var Application = Backbone.Router.extend({

	routes: {
		"home": "home",
		"group/:groupname": "group",
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

	default: function () {
		this.navigate('home', {trigger: true});
	}

});

module.exports = Application;
