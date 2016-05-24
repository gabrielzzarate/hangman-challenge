
/* words.js */

var Backbone = require('backbone');



var Word = Backbone.Model.extend({
	initialize: function(){
		console.log("A new word has been made");
	},



});

var WordCollection = Backbone.Collection.extend({
	model: Word,
	url: "http://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&minCorpusCount=0&minLength=5&maxLength=15&limit=1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5"


});



module.exports = {
	'Word': Word,
	'WordCollection': WordCollection
}
