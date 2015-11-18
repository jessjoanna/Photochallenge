var template = require('../../../_hbs/groep_detail.hbs');

var Group = require('../models/Group.js');

var GroepDetailView = Backbone.View.extend({

	template: template,
	section: 'section',
	className: 'groepdetail',

	initialize: function(options){
		if(options && options.groupname){

			this.model = new Group();
			this.model.set('groupname', options.groupname);

			this.model.fetch({
				success: function(model, response){
					if(response.length === 0){
						Window.Application.navigate('home', {trigger: true});
					}
				}
			});

			this.listenTo(this.model, 'sync', this.render);
		}
	},

	render: function(){
		this.$el.html(this.template(this.model.attributes));
		return this;
	}



});

module.exports = GroepDetailView;
