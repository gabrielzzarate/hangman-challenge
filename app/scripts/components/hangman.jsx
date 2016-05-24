
/* hangman.jsx */

var React = require('react');

var Hangman = React.createClass({
	getInitialState: function() {
	    return {
	    	visibility: false
	    };
	},
	render: function() {
		return (
			<div className="col-sm-8 hangman-container">
				<div className="the-gallows">

					<img src="images/bar.png" className="bar" />
					<img src="images/head.png" className="head"/>

					<img src="images/neck.png" className="neck"/>
					<img src="images/corpus.png" className="corpus" />

				</div>
			</div>
		);
	}

});

module.exports = Hangman;
