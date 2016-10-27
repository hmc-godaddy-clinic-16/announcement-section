import React from "react";
import Content from "./content.js";

class Announcement extends React.Component {
	render () {
		var image = this.props.data.image;

		var announcementStyle = {
			'borderStyle': 'solid',
			'backgroundImage': 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(' + image + ')',		
			'backgroundRepeat': 'no-repeat',
			'backgroundSize': 'cover'
		};

		return <div style={announcementStyle}>
			<Content data={this.props.data} />
		</div>
	}
}

export default Announcement;