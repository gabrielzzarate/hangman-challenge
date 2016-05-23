
/* words.js */

var Backbone = require('backbone');


var Word = Backbone.Model.extend({
	initialize: function(){
		console.log("A new word has been made");
	},



});

var WordCollection = Backbone.Collection.extend({
	model: Word,
	url:

});

module.exports = {
	'Word': Word,
	'WordCollection': WordCollection
}
