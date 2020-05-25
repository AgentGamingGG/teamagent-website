var openint = 0;
function navshowhide() {
    
    if (openint === 0) {
        openint = 1;
        document.getElementById("navbar").style.display = "inline-block";
        console.log('open');
        return;
    }
    if (openint === 1) {
        openint = 0;
        console.log('closed');
        document.getElementById("navbar").style.display = "none";
    }
  }