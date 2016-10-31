import React from "react";
import ReactDOM from "react-dom";
import * as constants from './constants';
import Announcement from "./announcement.js";

// mock mode
var mode = constants.EDIT;

// mock data
var announcementData = {
	title: "BUY ONE DOZEN GET ONE DOZEN FREE",
	content: "<b>October 13 - October 19</b> <br> 8:00 AM - 10:00 PM <br> Exclusions apply. See <a href=\"http:www.krispykreme.com\">here<a> for more details.",
	image: "http://cdn.jamieoliver.com/recipe-database/oldImages/xtra_med/1235_1_1436889055.jpg", 
	startDate: "2016-06-27T09:00:00.000Z",
	endDate: "2016-11-05T10:00:00.000Z"
};

ReactDOM.render(<Announcement data={announcementData} mode={mode}/>, document.getElementById("announcement"));