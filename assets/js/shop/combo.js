function currentDiv(n) {
    showDivs(slideIndex = n);
}  
function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("pic");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " w3-opacity-off";
}
var small = document.getElementById("small");
var medium = document.getElementById("medium");
var large = document.getElementById("large");
var xlarge = document.getElementById("xlarge");
var xxlarge = document.getElementById("xxlarge");
var selection = 0;
var errormsg = document.getElementById('error');

function clearall() {
    small.style.borderColor = "rgb(138, 138, 138)";
    medium.style.borderColor = "rgb(138, 138, 138)";
    large.style.borderColor = "rgb(138, 138, 138)";
    xlarge.style.borderColor = "rgb(138, 138, 138)";
    xxlarge.style.borderColor = "rgb(138, 138, 138)";
}
function smallsize() {
    selection = 1;
    clearall();
    small.style.borderColor = "white";
}
function mediumsize() {
    selection = 2;
    clearall();
    medium.style.borderColor = "white";
}
function largesize() {
    selection = 3;
    clearall();
    large.style.borderColor = "white";
}
function xlargesize() {
    selection = 4;
    clearall();
    xlarge.style.borderColor = "white";
}
function xxlargesize() {
    selection = 5;
    clearall();
    xxlarge.style.borderColor = "white";
}
function buynow() {
    if (selection >= 1) {
        if (selection == 1) {
            window.open('https://agentgamingesports.com/checkout/combo/size/S');
        }
        if (selection == 2) {
            window.open('https://agentgamingesports.com/checkout/combo/size/M');
        }
        if (selection == 3) {
            window.open('https://agentgamingesports.com/checkout/combo/size/L');
        }
        if (selection == 4) {
            window.open('https://agentgamingesports.com/checkout/combo/size/XL');
        }
        if (selection == 5) {
            window.open('https://agentgamingesports.com/checkout/combo/size/XXL');
        }
    } else {
        errormsg.style.display = "block";
        console.log(selection);
    }
}