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


// Show current link
// var pageID = window.location.pathname;

// store nav strings
var index = "/index.html"
var caseLink = document.getElementById("cases-link");
// var experimentsLink = document.getElementById("experiments-link");
// var contactLink = document.getElementById("contact-link");

function currentLink() {
   if (window.location.pathname === index) {
      caseLink.classList.add("current");
   } else {
   caseLink.classList.remove("current");
   }
}


/*
function currentLink() {
   if pageID.window.location.pathname === "/index.html" {
      caseLink.classList.add("current");
   }
      else if pageID.window.location.pathname === "/cases/case-oc.html" || "/cases/case-dv.html" || "/cases/case-ee.html" {
      caseLink.classList.add("current");
      }
      else if pageID.window.location.pathname === "/experiments/exp.html" {
      experimentsLink.classList.add("current");
      }
      else if pageID.window.location.pathname === "/contact/contact.html" {
      contactLink.classList.add("current");
      }
      else {
         caseLink.classList.remove("current");
         experimentsLink.classList.remove("current");
         contactLink.classList.remove("current");
      }
   }
}
*/



/*
var url = "http://joshn-2018.github.io/index.html".split("/"); //replace string with location.href
var navLinks = document.getElementsByTagName("nav")[0].getElementsByTagName("a");
//naturally you could use something other than the <nav> element
var i=0;
var currentPage = url[url.length - 1];
for(i;i<navLinks.length;i++){
  var lb = navLinks[i].href.split("/");
  if(lb[lb.length-1] == currentPage) {
   navLinks[i].className = "current";
  }
}
*/

// for (var i = 0; i < document.links.length; i++) {
//     if (document.links[i].href == document.URL) {
//         document.links[i].className = "current";
//     }
// }
