import React from 'react';
import {shallow, mount} from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';
import jsdom from 'jsdom-global';

import Announcement from "../src/announcement.js";

describe('<Announcement/>', () => {
	before(function () {
		this.jsdom = jsdom();
	})
});

after(function () {
	this.jsdom();
});

