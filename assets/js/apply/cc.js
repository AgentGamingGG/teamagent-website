var followstart = 0;
const followneed = 4;

function followclick() {
    followstart++;
    console.log('clicked')
}

function followcheck() {
    if (followstart >= followneed) {
        window.open('https://agentgamingesports.com/apply/content-creation')
    } else {
        document.getElementById('error').style.display = 'block';
    }
}