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


// Sticky contact functionality


// When the user scrolls the page, execute myFunction
// window.onscroll = function() {stickFunction()};

// Get the header
var header = document.getElementById("sticky-contact");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Get dom item to measure width of
// var logo = document.getElementsByClassName("logo");

// Get dom items width
// var logoWidth = logo.element.offsetWidth;

// Get the header again – don't know why!
var stickyPosition = document.getElementById("sticky-contact");
var navWidth = document.getElementsByTagName("sticky-contact").offsetWidth;


// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    // stickyPosition.style.marginLeft = navWidth + "px";
    stickyPosition.style.marginLeft = "1305px";
  } else {
    header.classList.remove("sticky");
    stickyPosition.style.marginLeft = "0px";
  }
}
