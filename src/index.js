import React from "react";
import ReactDOM from "react-dom";

var titleAndContent = React.createClass({
	<div>
		<h1 id="title">Title</h1>
		<p id="content">Content</p>
	</div>
});

// var Announcement = React.createClass({
// 	render: function() {
// 		var announcementStyle = {
// 			border-style: solid,
// 			background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('http://cdn.jamieoliver.com/recipe-database/oldImages/xtra_med/1235_1_1436889055.jpg'),		
// 			background-repeat: no-repeat,
// 			background-size: cover
// 		};
// 		return (
// 			<div style={announcementStyle}>
// 				{this.props.children}
// 			</div>
// 		);
// 	}
// });

ReactDOM.render(titleAndContent, document.getElementById("announcement"));