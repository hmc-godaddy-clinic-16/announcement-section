import React from "react";
import ReactDOM from "react-dom";
import Announcement from "./announcement.js";

// announcement can be displayed in both edit and published mode
const Mode = {
	EDIT: 'EDIT',
	PUBLISH: 'PUBLISH'
};
var mode = Mode.EDIT;

// mock data
var announcementData = {
	title: "BUY ONE DOZEN GET ONE DOZEN FREE",
	content: "<b>October 13 - October 19</b> <br> 8:00 AM - 10:00 PM <br> Exclusions apply. See <a href=\"http:www.krispykreme.com\">here<a> for more details.",
	image: "http://cdn.jamieoliver.com/recipe-database/oldImages/xtra_med/1235_1_1436889055.jpg", 
	startDate: "2016-06-27T09:00:00.000Z",
	endDate: "2016-11-05T10:00:00.000Z"
};

// scheduling data
var start = new Date(announcementData.startDate)
var end = new Date(announcementData.endDate)
var current = new Date();

// show announcement depending on scheduled date and mode
if (start < current && current < end || 
	mode == Mode.EDIT) {
	var announcement = <Announcement data={announcementData}/>;
} else {
	var announcement = <noscript/>;
}

ReactDOM.render(announcement, document.getElementById("announcement"));

// testing
console.log("Start: " + start);
console.log("End: " + end);
console.log("Current: " + current);
console.log("\n");
