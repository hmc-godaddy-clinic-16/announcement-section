import React from "react";
import Content from "./content.js";
import * as constants from './constants';

class Announcement extends React.Component {
	render () {
		var image = this.props.data.image;

		var announcementStyle = {
			'borderStyle': 'solid',
			'backgroundImage': 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(' + image + ')',		
			'backgroundRepeat': 'no-repeat',
			'backgroundSize': 'cover'
		};

		// scheduling data
		var start = new Date(this.props.data.startDate);
		var end = new Date(this.props.data.endDate);
		var current = new Date();

		// show announcement depending on scheduled date and mode
		if (start < current && current < end || 
			this.props.mode == constants.EDIT) {
			var announcement = (
				<div style={announcementStyle}>
					<Content data={this.props.data} />
				</div>
			);
		} else {
			var announcement = <noscript/>;
		}

		// debugging
		console.log("Start: " + start);
		console.log("End: " + end);
		console.log("Current: " + current);
		console.log("\n");

		return announcement;
	}
}

export default Announcement;