
/* Interface.jsx */

//3rd party
var $ = require('jQuery');
var React = require('react');
var Backbone = require('backbone');
var _ = require('underscore');

//local
var Welcome = require('./welcome.jsx');
var GamePlay = require('./gameplay.jsx');
var GameOver = require('./gameover.jsx');


var Interface = React.createClass({
	componentWillMount: function() {
		this.callback =(function(){
			this.forceUpdate();
		}).bind(this);
		this.props.router.on('route', this.callback);
	},
	componentWillUnmount: function() {
		this.props.router.off('route', this.callback);
	},
	render: function() {
		var body;
			if(this.props.router.current == 'welcome'){
				body = (
					//welcome screen
					<Welcome />
					);
				} else if(this.props.router.current == 'game'){
					body = (
						// game screen
						<GamePlay />
						);

			} else if (this.props.router.current == 'gameover'){
					body = (
						//client profile
						<GameOver />
						);

			} else {
					body = (
		        <div>
		          <h1>Page Doesnt Exist</h1>
		        </div>
        	);

			}
			var style = {
        backgroundColor: 'rgb(59, 67, 99)'
       };
			return (
				<div className="app-content">
					<div className="row body-container">

					<div id="main-container" style={style} className="animated fadeIn col-lg-12 col-sm-9 col-xs-9 col-xs-12">

						<div id="body-container" className="col-xs-12 ">

						{body}
						</div>
					</div>
					</div>



				</div>

				);
	}


});

module.exports= {
	"Interface": Interface
};
