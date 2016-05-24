
/* gameplay.jsx */

//3rd party
var React = require('react');
var Backbone = require('backbone');
require('backbone-react-component');

//local
var Hangman = require('hangman.jsx');
var Word = require('../models/words').Word;
var WordCollection = require('../models/words').WordCollection;

//console.log("collection", WordCollection);
//console.log('Word', Word);


var GamePlay = React.createClass({
	mixins: [Backbone.React.Component.mixin],
	componentDidMount: function() {
		setInterval(function(){
				//this.props.collection.fetch();
		}.bind(this), 2000);
		var words = this.props.collection;
		console.log(words);
		console.log(this.state.collection);
		console.log(this.getCollection());

	},
	render: function() {
		return (
			<div className="gameplay-container col-sm-12">
			<Hangman />


			</div>
		);
	}

});

module.exports = GamePlay;
