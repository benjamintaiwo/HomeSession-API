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

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});


rl.question(chalk.red('Welcome Benjamin. What do you seek? Enter 1 for Trends. 2 for Post: '), function(choice){
	
	if(choice == ''){

		rl.close();
		console.log(chalk.red('You have not typed in anything'));
	}
	else if(choice < 0 || choice > 2){
		rl.close();
		console.log(chalk.red('You have selected an invalid option'));
	}
	
	else if (choice == 1){
		//GET Consume to search for a word on twitter and return 5 recent tweets that contain the word 
		rl.question(chalk.red('What trend would you like to know about? '), (answer) => {
			if (typeof answer === "string"){
				twitter.get('search/tweets', { q: '#' + answer, count: 5 }, function(err, data, response) {
					var content = data.statuses;
					var count = 5;
					for (var i = 0; i < count; i++){
						var temp = content[i];
						console.log(temp['text']);
						rl.close();
					}
				});
			}
		});
	}
	else if(choice == 2){
		//POST Consume to Post a Tweet to my Timeline.
		rl.question(chalk.red('What are you thinking about? '), (answer) => {
			if (typeof answer === "string"){
				twitter.post('statuses/update', { status: answer }, function(err, data, response) {
					console.log(data['text']);
					rl.close();
				});
			}
		});
	}
});