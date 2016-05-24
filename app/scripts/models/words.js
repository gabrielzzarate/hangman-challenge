
/* words.js */

var Backbone = require('backbone');



var Word = Backbone.Model.extend({
	initialize: function(){
		console.log("A new word has been made");
	},



});

var WordCollection = Backbone.Collection.extend({
	model: Word,
	url: "http://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&minCorpusCount=0&minLength=5&maxLength=15&limit=1&api_key=aa796a444d9b1cff9900205d3390ff0f16d37ddf2b26d65a9"


});



module.exports = {
	'Word': Word,
	'WordCollection': WordCollection
}
