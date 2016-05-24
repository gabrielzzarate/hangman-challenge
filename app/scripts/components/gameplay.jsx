
/* gameplay.jsx */

//3rd party
var React = require('react');

//local
var Word = require('../models/words').Word;
var WordCollection = require('../models/words').WordCollection;

console.log("collection", WordCollection);
console.log('Word', Word);


var GamePlay = React.createClass({
	render: function() {
		return (
			<div className="gameplay-container col-sm-12">

			</div>
		);
	}

});

module.exports = GamePlay;
