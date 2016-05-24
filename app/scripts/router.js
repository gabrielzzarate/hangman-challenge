//3rd party
var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');


var Interface = require("./components/Interface.jsx").Interface;
var appContainer = document.getElementById('app');

//models
var WordsModel = require('./models/words.js');

//instances
var Words = new WordsModel.WordCollection();


var Router = Backbone.Router.extend({
	_appMounted: false,

	routes: {
		"": "welcome",
		"game/": "game",
		"gameover/": "gameover",

	},


	mainApp: function(route) {
		var self = this;
		self.current = route;

		//Bail if the app component is already mounted
		if(this._appMounted){
			return;
		};
		ReactDOM.unmountComponentAtNode(appContainer);
		ReactDOM.render(
			React.createElement(Interface,
				{router: self}),
				appContainer);
				this._appMounted = true;

	},
	welcome: function(){
		this.mainApp("welcome");
	},
	game: function(){
		this.mainApp("game");
	},
	gameover: function(){
		this.mainApp("gameover");
	}
});

module.exports = new Router();


