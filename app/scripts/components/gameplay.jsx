
/* gameplay.jsx */

//3rd party
var React = require('react');
var Backbone = require('backbone');
require('backbone-react-component');

//local
var Hangman = require('./hangman.jsx');
var LettersMissed = require('./lettersmissed.jsx');
var WordBlock = require('./wordblock.jsx');
var Word = require('../models/words').Word;
var WordCollection = require('../models/words').WordCollection;
var Word = require('./word.jsx');

//console.log("collection", WordCollection);
//console.log('Word', Word);


var GamePlay = React.createClass({
	mixins: [Backbone.React.Component.mixin],

	componentWillMount: function() {
		var words = this.props.collection.fetch();

	},


	render: function() {
		var wordsdetails = this.props.collection.map(function(word){

			return (<Word key={word.cid} word={word} />);


		});
		return (

			<div className="gameplay-container col-sm-12">
			<div className="row">
					<div className="col-sm-5">
						<Hangman />
					</div>
					<div className="col-sm-5">
						<LettersMissed />
						{wordsdetails}
					</div>
			</div>
			<div className="row">
				<div className="col-sm-10 col-sm-offset-1">
					<WordBlock />
					{wordsdetails}
				</div>
			</div>



			</div>
		);
	}

});

module.exports = GamePlay;
