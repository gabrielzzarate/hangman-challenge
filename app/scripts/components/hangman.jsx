
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
					<img src="images/left-arm.png" className="left-arm" />
					<img src="images/left-hand.png" className="left-hand" />
					<img src="images/right-arm.png" className="right-arm" />

				</div>
			</div>
		);
	}

});

module.exports = Hangman;
