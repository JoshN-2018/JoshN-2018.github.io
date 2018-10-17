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


// Mobile sticky header

window.onscroll = function() {stickyFunction()};

// Get the header
var header = document.getElementById("icon-contact");
var content = document.getElementById("stick-icon-cont");

// Get the offset position of the navbar
var sticky = header.offsetTop;

function stickyFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    content.classList.add("shift");
  } else {
    header.classList.remove("sticky");
    content.classList.remove("shift");
  }
}
