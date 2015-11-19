var Group = require('../models/Group.js');

var GroupCollection = Backbone.Collection.extend({

	model: Group,
	url: 'api/group/',

	initialize: function(options){
		if(options) {
			console.log(this.groupname);
			this.groupname = options.groupname;
		}
	},

	comparator: function(object) {
		return object.get("groupname");
	},

	methodUrl: function(method){
		if(method === "read" && this.groupname) {
			this.url = 'api/group/' + this.groupname;
			return;
		}
		this.url = 'api/group';
	},

	filterGroups: function(query){
		return this.filter(function(group){
			return group.get('groupname').toLowerCase().indexOf(query) > -1 || group.get('username').toLowerCase().indexOf(query) > -1;
		});
	},

	sync: function(method, model, options) {
		if(model.methodUrl && model.methodUrl(method.toLowerCase())) {
			options = options || {};
			options.url = model.methodUrl(method.toLowerCase());
		}
    Backbone.Collection.prototype.sync.apply(this, arguments);
	}

});

module.exports = GroupCollection;
