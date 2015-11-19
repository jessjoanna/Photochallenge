var template = require('../../../_hbs/groepOverzicht.hbs');

var UserCollection = require('../collections/UserCollection.js');
var User = require('../models/User.js');

var GroepOVerzichtView = Backbone.View.extend({

	template: template,
	className: 'groep',
	tagName: 'div',

	events: {
		'click .goGroup': 'clickGroup',
		'click .addMe': 'clickAdd'
	},

	initialize: function(){
		this.user = new UserCollection({user: 'self'});
		this.listenTo(this.user, 'sync', this.setGroup);
		this.user.fetch();

		this.userNow = new User();
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
		//Window.Application.navigate('group/' + this.model.get('groupname'), {trigger: true});

	},

	clickGroup: function(e){
		e.preventDefault();
		Window.Application.navigate('group/' + this.model.get('groupname'), {trigger: true});

	},

	render: function(){
		this.$el.html(this.template(this.model.attributes));
		return this;
	}

});

module.exports = GroepOVerzichtView;
