var twitterfollow = false;
var instafollow = false;
var tiktokfollow = false;
var twitchfollow = false;
var unlocked = 0;
var amountunlock = 3;

const button = document.getElementById('followproceed');
function twitterfollowclick() {
    var twitterfollow = true;
    console.log("Twitter Unlocked");
    unlocked++;
    if (unlocked == amountunlock) {
        console.log("Unlocked")
    }
};
function instafollowclick() {
    var instafollow = true;
    console.log("Instagram Unlocked");
    unlocked++;
    if (unlocked == amountunlock) {
        console.log("Unlocked")
    }
};
function tiktokfollowclick() {
    var tiktokfollow = true;
    console.log("TikTok Unlocked");
    unlocked++;
    if (unlocked == amountunlock) {
        console.log("Unlocked")
    }
};
function twitchfollowclick() {
    var twitchfollow = true;
    console.log("Twitch Unlocked");
    unlocked++;
    if (unlocked == amountunlock) {
        console.log("Unlocked")
    }
};
function nextpage() {
    if (unlocked < amountunlock) {
        window.open('https://agentgamingesports.com/apply/step-id-2aeF4d-4a','_blank');
    } else {
        document.getElementById("spanbuttonerror").style.display = "block";
    }
};
