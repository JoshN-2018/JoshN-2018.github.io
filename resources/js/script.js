// Overlay functionality

var overlay = document.getElementById("overlay");

function on() {
   overlay.classList.remove("overlayShift");
   overlay.classList.remove("overlayOff");
   overlay.style.transition = "opacity 0.5s ease";
   overlay.classList.add("overlayOn");
   document.getElementById("menu-button").style.display = "none";
   document.getElementById("menu-button-off").style.display = "block";
}

// function to be called after set time period
function delay() {
   overlay.classList.add("overlayShift");
}

function off() {
   overlay.classList.remove("overlayOn");
   overlay.classList.add("overlayOff");
   overlay.style.transition = "opacity 0.5s ease";
   setTimeout(function(){delay(); }, 500);


   document.getElementById("menu-button-off").style.display = "none";
   document.getElementById("menu-button").style.display = "block";
}


// link highlighting

// nav link ids
var caseLink = document.getElementById("cases-link");
var experimentsLink = document.getElementById("experiments-link");
var contactLink = document.getElementById("contact-link");
var iconContact = document.getElementById("icon-contact");
var logo = document.getElementById("logo-nav");
var width = 720


if(window.location.pathname === "/index.html") {
   caseLink.classList.add("current");
} else {
   caseLink.classList.remove("current");
}
if(window.location.pathname === "/experiments/index.html") {
   experimentsLink.classList.add("current");
} else {
   experimentsLink.classList.remove("current");
}
if(window.location.pathname === "/contact/index.html") {
   contactLink.classList.add("current");
   iconContact.style.display = "none";
} else {
   contactLink.classList.remove("current");
}

if(window.location.pathname === "/contact/contact.html" && window.innerWidth < width) {
   logo.style.marginTop = "0.45rem";
} else {
   logo.style.marginTop = "0rem";
}


// Sticky headers

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
    content.style.paddingTop = "1.1rem";

    // large
    headerLarge.classList.add("sticky");
    gap.style.marginBottom = "0px";
  } else {
    // small
    header.classList.remove("stickyM");
    content.classList.remove("shift");
    content.style.paddingTop = "0.4rem";

    // large
    headerLarge.classList.remove("sticky");
    gap.style.marginBottom = "-196px";
  }
}


//Above the line animate!!!

   //check DOM is loaded before animating
document.addEventListener("DOMContentLoaded", function(event) {

   // Get elements
   var tile = document.getElementsByClassName("case-tile");
   // var subTitle = document.getElementsByClassName("subTitle");
   // var body = document.getElementsByClassName("body");

   // Remove offsets from elements (to trigger animation)
   function delay1() {
      for (var i = 0; i < tile.length; i++) {
         tile[i].classList.remove("offsetAn1");
      }

   }
   function delay2() {
      for (var i = 0; i < tile.length; i++) {
         tile[i].classList.remove("offsetAn2");
      }
   }
   function delay3() {
      for (var i = 0; i < tile.length; i++) {
         tile[i].classList.remove("offsetAn3");
      }
   }
   function delay4() {
      for (var i = 0; i < tile.length; i++) {
         tile[i].classList.remove("offsetAn4");
      }
   }

   // Timings (call the above functions at set times)
   setTimeout(function(){delay1(); }, 100);
   setTimeout(function(){delay2(); }, 200);
   setTimeout(function(){delay3(); }, 300);
   setTimeout(function(){delay4(); }, 400);
});
