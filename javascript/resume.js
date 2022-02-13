/*  
 * DESCRIPTION...
 *
 * Author: Andrew Krause
 * Date: 01/31/2022
 * 
 */

// Wait to load the JavaScript until all of the HTML content is loaded (FIX LATER).
document.addEventListener("DOMContentLoaded", loadContent);

// Add the content to the page.
function loadContent(event) {

  // Add DOM objects using the following functions.
  addSkills();

}

// --> SECTION: Add skills list to the DOM.

// List of skills objects
// CAN ALWAYS ADD NEW SKILL OBJECTS HERE.
let mySkills = [
  {
    "skill-icon": "fab java fa-java fa-2x",
    "skill-style-padding": "padding-left: 15px; padding-top: 10px;",
    "skill-name": "Java",
    "skill-description": "I have had 3.5 years of experience with Java. I have used the language primarily for creating data structures such as binary trees and hash tables. I have also used the language to create simple games including a simplified version of pong.",
  },
  // {

  // },
];

/*
 * The function adds the skill objects to
 * the DOM. The skills are displayed as 
 * icons with sections on the website.
 */
function addSkills() {

  // Create a variable to obtain the div that 
  // the project objects will be created within.
  let skillList = document.querySelector(".skills-row");

  // Loop through the list of skills objects 
  // and output the content to the website.
  mySkills.forEach(mySkills => {

    // Create a new div tag element for the skill.
    let firstSkillDiv = document.createElement("div");
    firstSkillDiv.setAttribute("class", "col-lg-4 col-md-6 mb-5 specific-skill");
    skillList.appendChild(firstSkillDiv);

    // Create a second div tag element for the skill.
    let secondSkillDiv = document.createElement("div");
    firstSkillDiv.appendChild(secondSkillDiv);

    // Create a span element for the skill.
    let spanElement = document.createElement("span");
    spanElement.setAttribute("class", "mb-3 rounded-circle skill-inline");
    secondSkillDiv.appendChild(spanElement);

    // Create an i element for the skill.
    let iElement = document.createElement("i");
    iElement.setAttribute("class", mySkills["skill-icon"]);
    iElement.setAttribute("style", mySkills["skill-style-padding"]);
    spanElement.appendChild(iElement);

    // Create an h4 element for the skill.
    let headingElement = document.createElement("h4");
    headingElement.setAttribute("class", "skill-title skill-inline");
    secondSkillDiv.appendChild(headingElement);

    // Create a b element for the skill title.
    let bElement = document.createElement("b");
    bElement.appendChild(document.createTextNode(mySkills["skill-name"]));
    headingElement.appendChild(bElement);

    // Create a p element for the skill description.
    let pElement = document.createElement("p");
    pElement.setAttribute("class", "specific-skill-text");
    pElement.appendChild(document.createTextNode(mySkills["skill-description"]));
    firstSkillDiv.appendChild(pElement);
  });
}
