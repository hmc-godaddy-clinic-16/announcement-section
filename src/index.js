import React from "react";
import ReactDOM from "react-dom";
import Announcement from "./announcement.js";

var announcementData = {
	title: "BUY ONE DOZEN GET ONE DOZEN FREE",
	content: "<b>October 13 - October 19</b> <br> 8:00 AM - 10:00 PM <br> Exclusions apply. See <a href=\"http:www.krispykreme.com\">here<a> for more details.",
	image: "http://cdn.jamieoliver.com/recipe-database/oldImages/xtra_med/1235_1_1436889055.jpg"
};

ReactDOM.render(<Announcement data={announcementData}/>, document.getElementById("announcement"));