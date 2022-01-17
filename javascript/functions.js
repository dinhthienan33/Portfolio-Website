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

// Create an array of objects to list out the projects on the website.
let computerProjects = [
    {},
    {},
]

// Get the elements in the navbar by their ids.
document.getElementById("menu-about").addEventListener("click", about);
document.getElementById("menu-projects").addEventListener("click", projects);
document.getElementById("menu-contact").addEventListener("click", contact);

// Add a style (a highlight) to the "About" button if it is clicked.
function about() {
  // document.getElementById("menu-about").classList.remove("is-active");
  document.getElementById("menu-about").classList.add("is-active");
  document.getElementById("menu-projects").classList.remove("is-active");
  document.getElementById("menu-contact").classList.remove("is-active");
}

// Add a style (a highlight) to the "Projects" button if it is clicked.
function projects() {
  document.getElementById("menu-about").classList.remove("is-active");
  // document.getElementById("menu-projects").classList.remove("is-active");
  document.getElementById("menu-projects").classList.add("is-active");
  document.getElementById("menu-contact").classList.remove("is-active");
}

// Add a style (a highlight) to the "Contact" button if it is clicked.
function contact() {
  document.getElementById("menu-about").classList.remove("is-active");
  document.getElementById("menu-projects").classList.remove("is-active");
  // document.getElementById("menu-contact").classList.remove("is-active");
  document.getElementById("menu-contact").classList.add("is-active");
}
