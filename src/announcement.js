import React from "react";
import Content from "./content.js";

class Announcement extends React.Component {
	render () {
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
}

export default Announcement;