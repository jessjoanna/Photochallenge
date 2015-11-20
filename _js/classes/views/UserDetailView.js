var template = require('../../../_hbs/user_details.hbs');

var User = require('../models/User.js');

var UserDetailView = Backbone.View.extend({

	template: template,

	initialize: function(options){

		// if(options && options.groupname){
		if(options && options.id){

			this.model = new User();
			// this.model.set('groupname', options.groupname);
			this.model.set('id', options.id);

			this.model.fetch({
				success: function(model, response){
					if(response.length === 0){
						Window.Application.navigate('home', {trigger: true});
					}
				}
			});
			console.log(this.model);

			this.listenTo(this.model, 'sync', this.render);
		}
	},

	render: function(){
		console.log(this.model.attributes);
		this.$el.html(this.template(this.model.attributes));
		return this;
	}



});

module.exports = UserDetailView;
