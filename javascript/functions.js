/*  
 * DESCRIPTION...
 *
 * Author: Andrew Krause
 * Date: CURRENT
 * 
 */

// COMMENT...
// Offset this script until all of the HTML content is loaded
// document.addEventListener("DOMContentLoaded", start);

// // Create an array of objects to list out the projects on the website. --> WILL LIKELY COMPLETE LATER
// let computerProjects = [
//     {},
//     {},
// ]

// --> SECTION: Style the links in the navbar.

// Get the elements in the navbar by their ids.
document.getElementById("menu-about").addEventListener("click", about);
document.getElementById("menu-resume").addEventListener("click", resume);
document.getElementById("menu-projects").addEventListener("click", projects);
document.getElementById("menu-contact").addEventListener("click", contact);

// Add a style (a highlight) to the "About" button if it is clicked.
function about() {
  document.getElementById("menu-about").classList.add("is-active");
  document.getElementById("menu-resume").classList.remove("is-active");
  document.getElementById("menu-projects").classList.remove("is-active");
  document.getElementById("menu-contact").classList.remove("is-active");
}

// Add a style (a highlight) to the "Resume" button if it is clicked.
function resume() {
  document.getElementById("menu-about").classList.remove("is-active");
  document.getElementById("menu-resume").classList.add("is-active");
  document.getElementById("menu-projects").classList.remove("is-active");
  document.getElementById("menu-contact").classList.remove("is-active");
}

// Add a style (a highlight) to the "Projects" button if it is clicked.
function projects() {
  document.getElementById("menu-about").classList.remove("is-active");
  document.getElementById("menu-resume").classList.remove("is-active");
  document.getElementById("menu-projects").classList.add("is-active");
  document.getElementById("menu-contact").classList.remove("is-active");
}

// Add a style (a highlight) to the "Contact" button if it is clicked.
function contact() {
  document.getElementById("menu-about").classList.remove("is-active");
  document.getElementById("menu-resume").classList.remove("is-active");
  document.getElementById("menu-projects").classList.remove("is-active");
  document.getElementById("menu-contact").classList.add("is-active");
}





// --> SECTION: Style the modals on the website.

// MODAL 1
var anchor1 = document.getElementById("portfolio-item1");
var modal1 = document.getElementById("portfolioModal1");

// When the user clicks the button, open the modal.
anchor1.onclick = function() {
  modal1.classList.add('bg-active');
  document.body.classList.add('overflowHidden');
}

// ==================================================================

// MODAL 2

var anchor2 = document.getElementById("portfolio-item2");
var modal2 = document.getElementById("portfolioModal2");

// When the user clicks the button, open the modal.
anchor2.onclick = function() {
  modal2.classList.add('bg-active');
  document.body.classList.add('overflowHidden');
}

// ==================================================================

// MODAL 3

var anchor3 = document.getElementById("portfolio-item3");
var modal3 = document.getElementById("portfolioModal3");

// When the user clicks the button, open the modal.
anchor3.onclick = function() {
  modal3.classList.add('bg-active');
  document.body.classList.add('overflowHidden');
}

// ==================================================================

// MODAL 4

var anchor4 = document.getElementById("portfolio-item4");
var modal4 = document.getElementById("portfolioModal4");

// When the user clicks the button, open the modal.
anchor4.onclick = function() {
  modal4.classList.add('bg-active');
  document.body.classList.add('overflowHidden');
}

// ==================================================================

// MODAL 5

var anchor5 = document.getElementById("portfolio-item5");
var modal5 = document.getElementById("portfolioModal5");

// When the user clicks the button, open the modal.
anchor5.onclick = function() {
  modal5.classList.add('bg-active');
  document.body.classList.add('overflowHidden');
}

// ==================================================================

// MODAL 6

var anchor6 = document.getElementById("portfolio-item6");
var modal6 = document.getElementById("portfolioModal6");

// When the user clicks the button, open the modal.
anchor6.onclick = function() {
  modal6.classList.add('bg-active');
  document.body.classList.add('overflowHidden');
}

// ==================================================================

// MODAL 7

var anchor7 = document.getElementById("portfolio-item7");
var modal7 = document.getElementById("portfolioModal7");

// When the user clicks the button, open the modal.
anchor7.onclick = function() {
  modal7.classList.add('bg-active');
  document.body.classList.add('overflowHidden');
}

// ==================================================================

// MODAL 8

var anchor8 = document.getElementById("portfolio-item8");
var modal8 = document.getElementById("portfolioModal8");

// When the user clicks the button, open the modal.
anchor8.onclick = function() {
  modal8.classList.add('bg-active');
  document.body.classList.add('overflowHidden');
}

// ==================================================================
// Get the FIRST element that closes the modal (the big 'X').
// ==================================================================

var bigX1 = document.getElementById("exit-modal1");

bigX1.onclick = function() {
  modal1.classList.remove('bg-active');
  document.body.classList.remove('overflowHidden');
}

/* UNCOMMENT WHEN YOU GET THE OTHER MODALS MADE */
var bigX2 = document.getElementById("exit-modal2");
bigX2.onclick = function() {
  modal2.classList.remove('bg-active');
  document.body.classList.remove('overflowHidden');
}

// var bigX3 = document.getElementById("exit-modal3");
// bigX3.onclick = function() {
//   modal3.classList.remove('bg-active');
//   document.body.classList.remove('overflowHidden');
// }

// var bigX4 = document.getElementById("exit-modal4");
// bigX4.onclick = function() {
//   modal4.classList.remove('bg-active');
//   document.body.classList.remove('overflowHidden');
// }

// var bigX5 = document.getElementById("exit-modal5");
// bigX5.onclick = function() {
//   modal5.classList.remove('bg-active');
//   document.body.classList.remove('overflowHidden');
// }
  
// var bigX6 = document.getElementById("exit-modal6");

// bigX6.onclick = function() {
//   modal6.classList.remove('bg-active');
//   document.body.classList.remove('overflowHidden');
// }

// var bigX7 = document.getElementById("exit-modal7");
// bigX7.onclick = function() {
//   modal7.classList.remove('bg-active');
//   document.body.classList.remove('overflowHidden');
// }

// var bigX8 = document.getElementById("exit-modal8");
// bigX8.onclick = function() {
//   modal8.classList.remove('bg-active');
//   document.body.classList.remove('overflowHidden');
// }

// ==================================================================
// Get the SECOND element that closes the modal (the small 'x').
// ==================================================================

var smallX1 = document.getElementById("bottom-exit-modal1");

smallX1.onclick = function() {
  modal1.classList.remove('bg-active');
  document.body.classList.remove('overflowHidden');
}

/* UNCOMMENT WHEN YOU GET THE OTHER MODALS MADE */
var smallX2 = document.getElementById("bottom-exit-modal2");

smallX2.onclick = function() {
  modal2.classList.remove('bg-active');
  document.body.classList.remove('overflowHidden');
}

// var smallX3 = document.getElementById("bottom-exit-modal3");

// smallX3.onclick = function() {
//   modal3.classList.remove('bg-active');
//   document.body.classList.remove('overflowHidden');
// }

// var smallX4 = document.getElementById("bottom-exit-modal4");

// smallX4.onclick = function() {
//   modal4.classList.remove('bg-active');
//   document.body.classList.remove('overflowHidden');
// }

// var smallX5 = document.getElementById("bottom-exit-modal5");

// smallX5.onclick = function() {
//   modal5.classList.remove('bg-active');
//   document.body.classList.remove('overflowHidden');
// }

// var smallX6 = document.getElementById("bottom-exit-modal6");

// smallX6.onclick = function() {
//   modal6.classList.remove('bg-active');
//   document.body.classList.remove('overflowHidden');
// }

// var smallX7 = document.getElementById("bottom-exit-modal7");

// smallX7.onclick = function() {
//   modal7.classList.remove('bg-active');
//   document.body.classList.remove('overflowHidden');
// }

// var smallX8 = document.getElementById("bottom-exit-modal8");

// smallX8.onclick = function() {
//   modal8.classList.remove('bg-active');
//   document.body.classList.remove('overflowHidden');
// }

// ==================================================================
// When the user clicks anywhere outside of the modal, close it.
// ==================================================================
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.classList.remove('bg-active');
    document.body.classList.remove('overflowHidden');

  } else if(event.target == modal2) {
    modal2.classList.remove('bg-active');
    document.body.classList.remove('overflowHidden');

  } else if(event.target == modal3) {
    modal3.classList.remove('bg-active');
    document.body.classList.remove('overflowHidden');

  } else if(event.target == modal4) {
    modal4.classList.remove('bg-active');
    document.body.classList.remove('overflowHidden');

  } else if(event.target == modal5) {
    modal5.classList.remove('bg-active');
    document.body.classList.remove('overflowHidden');

  } else if(event.target == modal6) {
    modal6.classList.remove('bg-active');
    document.body.classList.remove('overflowHidden');

  } else if(event.target == modal7) {
    modal7.classList.remove('bg-active');
    document.body.classList.remove('overflowHidden');

  } else if(event.target == modal8) {
    modal8.classList.remove('bg-active');
    document.body.classList.remove('overflowHidden');

  }
}