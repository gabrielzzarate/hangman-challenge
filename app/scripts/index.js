//3rd party
window.jQuery = $ = require('jquery');
var $ = require('jquery');
var Backbone = require('backbone');
var bootstrap = require('bootstrap-sass/assets/javascripts/bootstrap.js');


//local
var router = require('./router.js'); // app main router


$(function(){

Backbone.history.start();


			var baseUrl = "http://api.wordnik.com/v4/word.json/";
			var apiKey = "a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5"; //demo key from developer.wordnik.com
			function getSynonyms (theWord, callback) {
				var url = baseUrl + theWord + "/relatedWords?useCanonical=true&relationshipTypes=synonym&limitPerRelationshipType=100&api_key=" + apiKey;
				var jxhr = $.ajax ({
					url: url,
					dataType: "text" ,
					timeout: 30000
					})
				.success (function (data, status) {
					var array = JSON.parse (data);
					console.log (data);
					callback (array [0].words)
					})
				.error (function (status) {
					console.log ("getSynonyms: url == " + url + ", error == " + JSON.stringify (status, undefined, 4));
					});
				}


});
