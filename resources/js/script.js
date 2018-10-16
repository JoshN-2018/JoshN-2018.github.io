// Overlay functionality

function on() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("menu-button").style.display = "none";
     document.getElementById("menu-button-off").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("menu-button-off").style.display = "none";
     document.getElementById("menu-button").style.display = "block";
}
