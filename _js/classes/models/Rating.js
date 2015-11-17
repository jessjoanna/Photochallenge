var Rating = Backbone.Model.extend({

	defaults: {
		"user_id" : "",
		"rating_item_id": "",
		"rating_score": 0,
		"rated_user": "",
		"group_id": ""
	},

		urlRoot: 'api/rating'

});

module.exports = Rating;
