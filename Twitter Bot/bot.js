var Twit = require('twit');

var config = require('./config');
console.log(config);

var T = new Twit(config);
var params = {
    q:'prajwalhaniya',
    count:2
}

T.get('search/tweets',params,gotData);

function gotData(err,data,response){
    var tweets = data.statuses;
    for(var i =0;i<tweets.length;i++){
        console.log(tweets[i].text);
    }
}

var tweet = {
    status: "Tweeting from an IDE, I am a bot."
}

T.post('statuses/update', tweet, tweeted);

function tweeted(err,data,response){
    if(err){
        console.log("An error occured");
    }
    else{
        console.log("Tweet sent!");
    }
}