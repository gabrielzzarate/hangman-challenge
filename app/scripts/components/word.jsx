
/* word.jsx */

var React = require('react');

var Word = React.createClass({
	render: function() {
		var word = this.props.word;
		console.log(word);
		console.log(word.get('word').length);
		var wordlength = word.get('word').length;

		for (var i=0; i > wordlength; i++){
			consol.log([i]);
		}
		return (

			<div className="words-missed-container">
				<h3>{word.get('word')}</h3>
			</div>
		);
	}

});

module.exports = Word;
