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
   // small
var header = document.getElementById("icon-contact");
var content = document.getElementById("stick-icon-cont");
   // medium / large
var headerLarge = document.getElementById("sticky-contact");
var gap = document.getElementById("container-case-stick");


// Get the offset position of the navbar
   // small
var sticky = header.offsetTop;
   // large
var stickyLarge = headerLarge.offsetTop;


function stickyFunction() {
  if (window.pageYOffset > sticky || stickyLarge) {
    // small
    header.classList.add("stickyM");
    content.classList.add("shift");
    // large
    headerLarge.classList.add("sticky");
    gap.style.marginBottom = "0px";
  } else {
    // small
    header.classList.remove("stickyM");
    content.classList.remove("shift");
    // large
    headerLarge.classList.remove("sticky");
    gap.style.marginBottom = "-196px";
  }
}
