/*  
 * The JavaScript file is utilized by the 
 * resume.html page of the website. The 
 * file adds skills, certifications, and
 * achivements (volunteer and academic
 * awards) to the resume page of the website
 * by using the JavaScript property of 
 * objects along with functions. The JS
 * in this file builds HTML after other
 * DOM elements are loaded on the website.
 *
 * Author: Andrew Krause
 * Date: 01/31/2022
 *
 */

// Wait to load the JavaScript until all of the HTML content is loaded.
document.addEventListener("DOMContentLoaded", loadContent);

// Add the content to the page.
function loadContent(event) {

  // Add DOM objects using the following functions.
  addSkills();
  addCertifications();
  addVolunteer();
}

// --> SECTION: Add skills list to the DOM.

// List of skills objects
// CAN ALWAYS ADD NEW SKILL OBJECTS HERE.
let mySkills = [
  {
    "skill-icon": "azure icon-azure fa-2x",
    "skill-style-padding": "padding-left: 0px; padding-top: 5px;",
    "skill-name": "Azure",
    "skill-description": "I have used Azure resources during my experiences at Kwik Trip. I have used event hubs, service buses, iot hubs, function apps, and app insights as part of developing solutions at the company. I have been working with these tools for about 1.5 years.",
  },
  {
    "skill-icon": "fa-solid fa-desktop fa-2x",
    "skill-style-padding": "padding-left: 0px; padding-top: 5px;",
    "skill-name": "ASP.NET Core",
    "skill-description": "I have used ASP.NET Core for about 1.5 years to create web applications at Kwik Trip. These web apps have been used by the company to process and display significant amounts of data to help the IT department complete important tasks.",
  },
  {
    "skill-icon": "csharp icon-csharp fa-2x",
    "skill-style-padding": "padding-left: 0px; padding-top: 12px;",
    "skill-name": "C#-Programming",
    "skill-description": "I have used C# as one of the primary programming languages at the company of Kwik Trip. I have written web apps, function apps, and console apps using the language. I have been working with this technology for about 1.5 years.",
  },
  {
    "skill-icon": "fab java fa-java fa-2x",
    "skill-style-padding": "padding-left: 0px; padding-top: 0px;",
    "skill-name": "Java",
    "skill-description": "I have had 3.5 years of experience with Java. I have used the language primarily for creating data structures such as binary trees and hash tables. I have also used the language to create simple games including a simplified version of pong.",
  },
  {
    "skill-icon": "c-programming icon-c fa-2x",
    "skill-style-padding": "padding-left: 16px; padding-top: 22px; display: flex;",
    "skill-name": "C-Programming",
    "skill-description": "I have worked with the C programming language for 3 years. I have used the lower level language to create simple data structures such as linked lists as well as a simulation project.",
  },
  {
    "skill-icon": "fab python fa-python fa-2x",
    "skill-style-padding": "padding-left: 0px; padding-top: 2px;",
    "skill-name": "Python, Django",
    "skill-description": "I have had 1 year of experience with Python and Django. I have used my knowledge of Django, a Python-based web technology, to build websites such as a Park Finder application that allows users to find national parks and places in the United States.",
  },
  {
    "skill-icon": "fas git fa-code-branch fa-2x",
    "skill-style-padding": "padding-left: 0px; padding-top: 2px;",
    "skill-name": "Git, GitHub",
    "skill-description": "I have utilized both Git and GitHub throughout the process of creating my projects. I have a GitHub account where I host a number of projects in public repositories. I have used version control to collaborate with team members and develop different web applications.",
  },
  {
    "skill-icon": "fas code fa-code fa-2x",
    "skill-style-padding": "padding-left: 0px; padding-top: 2px;",
    "skill-name": "HTML, CSS, JavaScript",
    "skill-description": "I have spent a significant amount of time familiarizing myself with HTML, CSS, and JavaScript for web development. I have had about 1 year working with these languages. I have built web applications such as this website, my personal webpage, and a Team Aptiv application that services different users.",
  },
  {
    "skill-icon": "fab bootstrap fa-bootstrap fa-2x",
    "skill-style-padding": "padding-left: 0px; padding-top: 1px;",
    "skill-name": "Bootstrap",
    "skill-description": "I have used Bootstrap as a frontend library for developing websites. Bootstrap provides a plethora of useful tools for styling web applications, and I have learned an extensive amount of information about the technology.",
  },
  {
    "skill-icon": "fab node fa-node-js fa-2x",
    "skill-style-padding": "padding-left: 0px; padding-top: 1px;",
    "skill-name": "Node.js",
    "skill-description": "I have used Node.js to help build the backend of different web applications. I am familiar with modules in Node.js such as Express, Request, Bcrypt and Oauth. I have been working with this technology for about 1 year.",
  },
  {
    "skill-icon": "mongodb icon-mongodb fa-2x",
    "skill-style-padding": "padding-left: 0px; padding-top: 8px;",
    "skill-name": "MongoDB",
    "skill-description": "I have had about 1 year of experience with MongoDB. I have used it to create databases for the majority of my web application projects.",
  },
  {
    "skill-icon": "fas fa-solid fa-database fa-2x",
    "skill-style-padding": "padding-left: 0px; padding-top: 1px;",
    "skill-name": "SQL",
    "skill-description": "I recently learned SQL during my junior year of college. Using the language, I created a simple website to display hospital data. The data can be viewed, edited, and/or removed.",
  },
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

    // Create a third div tag element for the skill.
    let thirdSkillDiv = document.createElement("div");
    thirdSkillDiv.setAttribute("class", "skill-inline");
    secondSkillDiv.appendChild(thirdSkillDiv);

    // Create a span element for the skill.
    let spanElement = document.createElement("span");
    spanElement.setAttribute("class", "mb-3 rounded-circle");
    thirdSkillDiv.appendChild(spanElement);

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

// --> SECTION: Add certifications list to the DOM.

// List of certifications objects
// CAN ALWAYS ADD NEW CERTIFICATION OBJECTS HERE.
let myCertifications = [
  {
    "certification-img": "images/certifications-images/udemy.png",
    "certification-alt": "udemy-img",
    "certification-title": "Agile Fundamentals: Including Scrum and Kanban - 2020",
    "certification-source": "Udemy Certification",
    "certification-description": "I earned a certification in the basics of Agile by working on the course over the winter of 2020. The course was a total of 4.5 hours.",
  },
  {
    "certification-img": "images/certifications-images/udemy.png",
    "certification-alt": "udemy-img",
    "certification-title": "The Complete 2021 Web Development Bootcamp",
    "certification-source": "Udemy Certification",
    "certification-description": "Certificate was earned by taking a course over the summer of 2021 that equated to about 55 hours of work. I learned the basics of web frontend and backend development.",
  },
  {
    "certification-img": "images/certifications-images/codewithmosh.png",
    "certification-alt": "codewithmosh-img",
    "certification-title": "The Ultimate Git Course",
    "certification-source": "Code With Mosh Certification",
    "certification-description": "The certificate was earned by taking a course over the summer of 2021 that equated to about 5 hours of work. I learned the basics of web frontend and backend development.",
  },
  {
    "certification-img": "images/certifications-images/codewithmosh.png",
    "certification-alt": "codewithmosh-img",
    "certification-title": "The Ultimate Django Series: Part One",
    "certification-source": "Code With Mosh Certification",
    "certification-description": "The certification was earned by taking a course on the basics of Django, a framework for web development in Python. The total amount of work was 5 hours.",
  },
];

/*
 * The function adds the certification
 * objects to the DOM. The certifications 
 * are displayed as icons with sections
 * on the website.
 */
function addCertifications() {

  // Create a variable to obtain the div that 
  // the certification objects will be created 
  // within.
  let certificationList = document.querySelector(".certifications-row");

  // Loop through the list of certification objects 
  // and output the content to the website.
  myCertifications.forEach(myCertifications => {

    // Create a new div tag element for the certification.
    let firstCertificationDiv = document.createElement("div");
    firstCertificationDiv.setAttribute("class", "col-lg-4 col-md-6 mb-5 certification-card");
    certificationList.appendChild(firstCertificationDiv);

    // Create a second div tag element for the certification.
    let secondCertificationDiv = document.createElement("div");
    secondCertificationDiv.setAttribute("class", "certificate-image-heading");
    firstCertificationDiv.appendChild(secondCertificationDiv);

    // Create an image element for the certification.
    let certificationImage = document.createElement("img");
    certificationImage.setAttribute("class", "certificate-pic certification-inline");
    certificationImage.setAttribute("src", myCertifications["certification-img"]);
    certificationImage.setAttribute("alt", myCertifications["certification-alt"]);
    secondCertificationDiv.appendChild(certificationImage);
  
    // Create a header element for the certification.
    let certificationHeading = document.createElement("h4");
    certificationHeading.setAttribute("class", "certification-title certification-inline");
    certificationHeading.appendChild(document.createTextNode(myCertifications["certification-title"]));
    secondCertificationDiv.appendChild(certificationHeading);
  
    // Create a third div tag element for the certification.
    let thirdCertificationDiv = document.createElement("div");
    firstCertificationDiv.appendChild(thirdCertificationDiv);
  
    // Create a paragraph tag element for the certification.
    let firstParagraphTag = document.createElement("p");
    firstParagraphTag.setAttribute("class", "specific-certification-heading");
    thirdCertificationDiv.appendChild(firstParagraphTag);
  
    // Create a italicize tag element for the certification.
    let italicizeTag = document.createElement("i");
    italicizeTag.appendChild(document.createTextNode(myCertifications["certification-source"]));
    firstParagraphTag.appendChild(italicizeTag);

    // Create a second paragraph tag element for the certification.
    let secondParagraphTag = document.createElement("p");
    secondParagraphTag.setAttribute("class", "specific-certification-text");
    secondParagraphTag.appendChild(document.createTextNode(myCertifications["certification-description"]));
    thirdCertificationDiv.appendChild(secondParagraphTag);
  });
}

// --> SECTION: Add volunteer list to the DOM.

// List of volunteer objects
// CAN ALWAYS ADD NEW VOLUNTEER OBJECTS HERE.
let myVolunteer = [
  {
    "volunteer-img": "images/achievements-images/uwl-red.png",
    "volunteer-alt": "uwl-img",
    "volunteer-title": "UWL Campus Move-In Assistant",
    "volunteer-subheading": "Volunteering, September 2021",
    "volunteer-description": "I helped students move into their dormitory rooms for the Fall semester at the University of Wisconsin - La Crosse. I also helped to set up the rooms for the new students.",
  },
  {
    "volunteer-img": "images/achievements-images/bestbuddies.png",
    "volunteer-alt": "bestbuddies-img",
    "volunteer-title": "Best Buddies Hot Food Stand",
    "volunteer-subheading": "Volunteering, April 2021",
    "volunteer-description": "I helped raise money for the special needs program, the Best Buddies, by running a hot dog stand in La Crosse.",
  },
  {
    "volunteer-img": "images/achievements-images/deanslistuwl.png",
    "volunteer-alt": "uwl-img",
    "volunteer-title": "Dean's List Spring, Fall 2022",
    "volunteer-subheading": "Academic Award",
    "volunteer-description": "Maintained a GPA of 3.5 or higher for the Spring 2022 and Fall 2022 semesters.",
  },
  {
    "volunteer-img": "images/achievements-images/deanslistuwl.png",
    "volunteer-alt": "uwl-img",
    "volunteer-title": "Dean's List Sophomore Year",
    "volunteer-subheading": "Academic Award",
    "volunteer-description": "Maintained a GPA of 3.5 or higher for the Fall 2020 and Spring 2021 semesters.",
  },
];

/*
 * The function adds the volunteer
 * objects to the DOM. The volunteer  
 * objects are displayed as icons with 
 * sections on the website.
 */
function addVolunteer() {

  // Create a variable to obtain the div that 
  // the volunteer objects will be created 
  // within.
  let volunteerList = document.querySelector(".volunteer-row");

  // Loop through the list of volunteer objects 
  // and output the content to the website.
  myVolunteer.forEach(myVolunteer => {

    // Create a new div tag element for the volunteer work.
    let firstVolunteerDiv = document.createElement("div");
    firstVolunteerDiv.setAttribute("class", "col-lg-4 col-md-6 mb-5 specific-volunteering");
    volunteerList.appendChild(firstVolunteerDiv);

    // Create a second div tag element for the volunteer work.
    let secondVolunteerDiv = document.createElement("div");
    secondVolunteerDiv.setAttribute("class", "volunteer-image-heading");
    firstVolunteerDiv.appendChild(secondVolunteerDiv);

    // Create an image element for the volunteer work.
    let volunteerImage = document.createElement("img");
    volunteerImage.setAttribute("class", "volunteer-pic volunteer-inline");
    volunteerImage.setAttribute("src", myVolunteer["volunteer-img"]);
    volunteerImage.setAttribute("alt", myVolunteer["volunteer-alt"]);
    secondVolunteerDiv.appendChild(volunteerImage);
  
    // Create a header element for the volunteer work.
    let volunteerHeading = document.createElement("h4");
    volunteerHeading.setAttribute("class", "volunteer-title volunteer-inline");
    volunteerHeading.appendChild(document.createTextNode(myVolunteer["volunteer-title"]));
    secondVolunteerDiv.appendChild(volunteerHeading);
  
    // Create a third div tag element for the volunteer work.
    let thirdVolunteerDiv = document.createElement("div");
    firstVolunteerDiv.appendChild(thirdVolunteerDiv);
  
    // Create a paragraph tag element for the volunteer work.
    let firstParagraphTagV = document.createElement("p");
    firstParagraphTagV.setAttribute("class", "specific-volunteer-heading");
    thirdVolunteerDiv.appendChild(firstParagraphTagV);
  
    // Create a italicize tag element for the volunteer work.
    let italicizeTagV = document.createElement("i");
    italicizeTagV.appendChild(document.createTextNode(myVolunteer["volunteer-subheading"]));
    firstParagraphTagV.appendChild(italicizeTagV);

    // Create a second paragraph tag element for the volunteer work.
    let secondParagraphTagV = document.createElement("p");
    secondParagraphTagV.setAttribute("class", "specific-volunteer-text");
    secondParagraphTagV.appendChild(document.createTextNode(myVolunteer["volunteer-description"]));
    thirdVolunteerDiv.appendChild(secondParagraphTagV);
  });
}
