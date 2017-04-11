#!/bin/usr/env node

"use strict";

var tweet		= require('twitter');
var readline 	= require('readline');
var chalk		= require('chalk');
var clear       = require('clear');
var CLI         = require('clui');
var figlet      = require('figlet');
var inquirer    = require('inquirer');
var Preferences = require('preferences');

clear();
console.log(
  chalk.yellow(
    figlet.textSync('CHECK TWEETER', { horizontalLayout: 'half' })
  )
);

var twitter = new tweet({
	consumer_key: 'OnxWMQuSaJO5WxKTYBMTsJiCr',
	consumer_secret: 'Ps5HrEOFObaSr27vB7WUvieYwQmPoAW97SSNcl39BYZn9nPXgD',
	access_token_key: '392688355-S5J2JuYFnBrfCsglXkbohBDVUYSbHfAxklL8oRDj',
	access_token_secret: 'lhzPcVh2R8F6cgNU4YmKVsEpDwRQzENJIWYjodxYBjeET'
});

