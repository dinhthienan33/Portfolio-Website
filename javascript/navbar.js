/*  
 * The JavaScript file is utilized by all pages
 * of the website given that all pages contain
 * the navigation bar. The file provides simple
 * functions for animating the links in the 
 * navbar menu when they are hovered over or 
 * clicked. The functions also ensure that the
 * appropiate link is underlined to represent
 * the active page (the page being viewed) on
 * the website.
 *
 * Author: Andrew Krause
 * Date: 01/31/2022
 * 
 */

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
