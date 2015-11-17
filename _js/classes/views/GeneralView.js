var UserCollection = require('../collections/UserCollection.js');
var GroupCollection = require('../collections/GroupCollection.js');

var generalView = Backbone.View.extend({

	clickFoto: function(e){
		e.preventDefault();
		console.log('to fotoview');
		Window.Application.navigate('fotos', {trigger: true});
	},

	getDay: function(){
		var day = this.groupCollection.models[0].attributes.day;
		if(day !== 0){
			return day-1;
		}
	},

	leadZero: function(num){
		if(parseInt(num) <= 9){
			return "0"+num;
		}
		return num;
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

getDateFromToday: function(val){

	var fullDate = new Date();
	fullDate.setDate(fullDate.getDate() + val);

	return fullDate.format("yyyy-mm-dd");

},

});

module.exports = generalView;
