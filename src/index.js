import React from "react";
import ReactDOM from "react-dom";

var announcementData = {
	title: "BUY ONE DOZEN GET ONE DOZEN FREE",
	content: "<b>October 13 - October 19</b> <br> 8:00 AM - 10:00 PM <br> Exclusions apply. See <a href=\"http:www.krispykreme.com\">here<a> for more details.",
	image: "http://cdn.jamieoliver.com/recipe-database/oldImages/xtra_med/1235_1_1436889055.jpg"
};

var Announcement = React.createClass({
	render: function() {
		var image = this.props.data.image;

		var announcementStyle = {
			'border-style': 'solid',
			'background-image': 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(' + image + ')',		
			'background-repeat': 'no-repeat',
			'background-size': 'cover'
		};

		return <div style={announcementStyle}>
			<Content data={this.props.data} />
		</div>
	}
});

var Content = React.createClass({
	render: function() {
		var contentStyle = {
			'color': 'white',
			'text-align': 'center'
		};

		return (
				<div style={contentStyle}>
					<h1 id="title">{this.props.data.title}</h1>
					<p id="content" span dangerouslySetInnerHTML={{ __html: this.props.data.content}} />
				</div>
	)}
});

ReactDOM.render(<Announcement data={announcementData}/>, document.getElementById("announcement"));