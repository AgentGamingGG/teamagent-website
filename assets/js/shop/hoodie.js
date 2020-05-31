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