var template = require('../../../_hbs/groep_detail.hbs');

var Group = require('../models/Group.js');
var Color = require('../models/Color.js');
var Object = require('../models/Object.js');

var ChallengeCollection = require('../collections/ChallengeCollection.js');
var ColorCollection = require('../collections/ColorCollection.js');
var ObjectCollection = require('../collections/ObjectCollection.js');
//var ChallengeDetailView = require('./ChallengeDetailView.js');

var GroepDetailView = Backbone.View.extend({

	template: template,
	section: 'section',
	className: 'groepdetail',

	events: {
		'click .day': 'clickDay'
	},

	initialize: function(options){

		this.challengeCollection = new ChallengeCollection();
		this.colorCollection = new ColorCollection();
		this.objectCollection = new ObjectCollection();

		this.listenTo(this.colorCollection, 'sync', this.setColor);
		this.listenTo(this.colorCollection, 'sync', this.setChallenge);
		this.listenTo(this.objectCollection, 'sync', this.setObject);

		this.colorCollection.fetch();
		this.challengeCollection.fetch();
		this.objectCollection.fetch();


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

	clickDay: function(e){
		e.preventDefault();
		Window.Application.navigate('day'), {trigger: true};
	},

	setColor: function(){
		this.colorLastId = this.colorCollection.length;
		this.randomColorId = Math.floor(Math.random() * this.colorLastId) +1;
		console.log(this.randomColorId);

		this.randomColor = new Color();
		this.randomColor.set('id', this.randomColorId);
		this.randomColor.fetch({
			success: function(model, response){
				if(response.length === 0){
					console.log('fout');
				}
			}
		});

		this.listenTo(this.randomColor, 'sync', this.render);
		// console.log(this.randomColor);

	},

	setObject: function(){
		this.objectLastId = this.objectCollection.length;
		this.randomObjectId = Math.floor(Math.random() * this.objectLastId) +1;
		console.log(this.randomObjectId);

		this.randomObject = new Object();
		this.randomObject.set('id', this.randomObjectId);
		this.randomObject.fetch({
			success: function(model, response){
				if(response.length === 0){
					console.log('fout');
				}
			}
		});

		this.listenTo(this.randomObject, 'sync', this.render);
		console.log(this.randomObject);

	},

	setChallenge: function(){
		this.challengeLastId = this.challengeCollection.length;
	},

	render: function(){
		this.$el.html(this.template(this.model.attributes));
		return this;
	}



});

module.exports = GroepDetailView;
