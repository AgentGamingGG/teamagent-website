height = 0
used = 0
function stashxp(){
    if (used == 1){
        return;
    }
    about_text = document.getElementById("stashxp-about-text");
    about = document.getElementById("stashxp-about");
    about.style.display = "block";
    about.style.height = "inherit";
    inheritheight = about.offsetHeight
    about.style.height = "0"; 
    animate = setInterval(execute, 5);
    function execute() {
        if (height == inheritheight) {
            clearInterval(animate);
        } else {
            height++;
            about.style.height = height + "px";
        }
    }
    about.style.height = "inherit";
    used++
}