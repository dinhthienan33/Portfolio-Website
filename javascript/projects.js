/*  
 * The JavaScript file provides functions to build
 * the project cards and corresponding modals for 
 * the projects.html page of the website. After 
 * the other DOM elements of the website are loaded,
 * this file executes the functions responsible for
 * building the components of the projects.html page.
 * JS objects are used to create new project cards
 * and new modals on the projects page.
 * 
 * NOTE: All of the window click events and
 * functions are located in the windows.js 
 * file!
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
  addProjects();
  addProjectModals();
  addModalFunctions();
}

// --> SECTION: Add the project cards to the DOM.

// List of project card objects.
// CAN ALWAYS ADD NEW PROJECT OBJECTS HERE.
let myProjects = [
  {
    "project-id": "portfolio-item12",
    "project-ref": "#portfolioModal12",
    "project-image": "images/travelblog-images/travelblog.png",
    "project-image-alt": "travelblog-img",
    "project-name": "TravelBlog",
    "project-brief": "In Progress...Maybe 2026 Release",
  },
  {
    "project-id": "portfolio-item11",
    "project-ref": "#portfolioModal11",
    "project-image": "images/riversideburgerbash-images/rbb-home.png",
    "project-image-alt": "travelblog-img",
    "project-name": "Restaurant Webpage",
    "project-brief": "Webpage made to practice design.",
  },
  {
    "project-id": "portfolio-item10",
    "project-ref": "#portfolioModal10",
    "project-image": "images/compiler-images/compiler-grammar.png",
    "project-image-alt": "compiler-grammar-img",
    "project-name": "Simple Compiler",
    "project-brief": "Compiler written for a C-like language.",
  }, 
  {
    "project-id": "portfolio-item9",
    "project-ref": "#portfolioModal9",
    "project-image": "images/patientcaremanager-images/pcm-home.png",
    "project-image-alt": "pcm-img",
    "project-name": "Patient Care Manager",
    "project-brief": "Web application written using Express.js.",
  }, 
  {
    "project-id": "portfolio-item8",
    "project-ref": "#portfolioModal8",
    "project-image": "images/parkfinder-images/parkfinder-home.png",
    "project-image-alt": "parkfinder-img",
    "project-name": "Park Finder",
    "project-brief": "Web application written using Django.",
  },
  {
    "project-id": "portfolio-item7",
    "project-ref": "#portfolioModal7",
    "project-image": "images/teamaptiv-images/teamaptiv-card.png",
    "project-image-alt": "teamaptiv-img",
    "project-name": "Team Aptiv",
    "project-brief": "Web application written using Express.js.",
  },
  {
    "project-id": "portfolio-item6",
    "project-ref": "#portfolioModal6",
    "project-image": "images/apppromotion-images/apppromotion-home.png",
    "project-image-alt": "apppromotion-img",
    "project-name": "Promotional Webpage",
    "project-brief": "Webpage made to practice Bootstrap.",
  },
  {
    "project-id": "portfolio-item5",
    "project-ref": "#portfolioModal5",
    "project-image": "images/personalwebpage-images/firstpersonal-home.png",
    "project-image-alt": "personalwebpage-img",
    "project-name": "First Personal Webpage",
    "project-brief": "Simple website made with HTML/CSS.",
  },
  {
    "project-id": "portfolio-item4",
    "project-ref": "#portfolioModal4",
    "project-image": "images/officesimulation-images/officesimulation-card.png",
    "project-image-alt": "officesimulation-img",
    "project-name": "Office Hours Simulation",
    "project-brief": "Program to simulate office hours.",
  },
  {
    "project-id": "portfolio-item3",
    "project-ref": "#portfolioModal3",
    "project-image": "images/hashtable-images/hashtable-drawing.png",
    "project-image-alt": "hashtable-img",
    "project-name": "Hash Table",
    "project-brief": "Data structure written using Java.",
  },
  {
    "project-id": "portfolio-item2",
    "project-ref": "#portfolioModal2",
    "project-image": "images/javapong-images/javapong-card.png",
    "project-image-alt": "javapong-img",
    "project-name": "Java Pong",
    "project-brief": "Adaptation of the pong game.",
  },
  {
    "project-id": "portfolio-item1",
    "project-ref": "#portfolioModal1",
    "project-image": "images/firstdrawing-images/firstdrawing-card.png",
    "project-image-alt": "firstdrawing-img",
    "project-name": "First Java Program",
    "project-brief": "Simple drawing made with Java.",
  },
];

/*
 * The function adds the project objects to
 * the DOM. The projects are displayed as cards
 * on the website.
 */
function addProjects() {

  // Create a variable to obtain the div that 
  // the project objects will be created within.
  let projectList = document.querySelector(".projects-row");

  // Loop through the list of project objects
  // and output the content to the website.
  myProjects.forEach(myProjects => {

    // Create a new anchor tag element for the project.
    let anchorTag = document.createElement("a");
    anchorTag.setAttribute("id", myProjects["project-id"]);
    anchorTag.setAttribute("onClick", "get_ID(this)");
    anchorTag.setAttribute("class", "portfolio-item");
    anchorTag.setAttribute("data-toggle", "modal");
    anchorTag.setAttribute("href", myProjects["project-ref"]);
    projectList.appendChild(anchorTag);

    // Create a short script in order to open the correct modal.
    let scriptTag = document.createElement("script");
    scriptTag.appendChild(document.createTextNode("function get_ID(portItem) {"));
    scriptTag.appendChild(document.createTextNode("    return portItem.id;"));
    scriptTag.appendChild(document.createTextNode("}"));
    anchorTag.appendChild(scriptTag);

    // Create a new div element for the project.
    let innerAnchorDiv = document.createElement("div");
    innerAnchorDiv.setAttribute("class", "col-lg-4 col-md-6 mb-5 projects-card");
    anchorTag.appendChild(innerAnchorDiv);

    // Create a new image element for the project.
    let innerAnchorImage = document.createElement("img");
    innerAnchorImage.setAttribute("class", "projects-pic");
    innerAnchorImage.setAttribute("src", myProjects["project-image"]);
    innerAnchorImage.setAttribute("alt", myProjects["project-image-alt"]);
    innerAnchorDiv.appendChild(innerAnchorImage);

    // Create a div element to create a different hover effect.
    let innerInfoDiv = document.createElement("div");
    innerInfoDiv.setAttribute("class", "projects-pic-info");
    innerAnchorDiv.appendChild(innerInfoDiv);

    // Create a div element to hold an "info" icon.
    let innerInfoTextDiv = document.createElement("div");
    innerInfoTextDiv.setAttribute("class", "projects-pic-info-text");
    innerInfoDiv.appendChild(innerInfoTextDiv);

    // Create an icon element to show the "info" icon.
    let innerInfoIcon = document.createElement("i");
    innerInfoIcon.setAttribute("class", "fa-solid fa-circle-info fa-3x");
    innerInfoTextDiv.appendChild(innerInfoIcon);

    // Create a second div element for the project.
    let secondInnerAnchorDiv = document.createElement("div");
    secondInnerAnchorDiv.setAttribute("class", "projects-card-container");
    innerAnchorDiv.appendChild(secondInnerAnchorDiv);

    // Create a header element for the project.
    let innerHeader = document.createElement("h4");
    innerHeader.setAttribute("class", "projects-title");
    innerHeader.appendChild(document.createTextNode(myProjects["project-name"]));
    secondInnerAnchorDiv.appendChild(innerHeader);

    // Create a header element for the project.
    let innerParagraph = document.createElement("p");
    innerParagraph.setAttribute("class", "specific-projects-text");
    innerParagraph.appendChild(document.createTextNode(myProjects["project-brief"]));
    secondInnerAnchorDiv.appendChild(innerParagraph);
  });
}

// --> SECTION: Add the project modals to the DOM.

// List of project modal objects.
// CAN ALWAYS ADD NEW MODAL OBJECTS HERE.
let myProjectModals = [
  {
    "modal-id": "portfolioModal12",
    "modal-span-id": "exit-modal12",
    "modal-heading": "TravelBlog",
    "modal-subheading": "Social media web app created for blogging.",
    "modal-description": "The TravelBlog web application allows users to share their love of travel through blogging. Users can create an account with the website to make content that will be displayed for other people to view. The web app enables content to be shared in the form of blogs, which are based on a given individual's trips and adventures. Each blog created by a user is comprised of posts, which can contain the text and image content. Future features will include: Email verification, image uploads, connecting with other users, tracking where you have visited in the world based on your blogging, and advertising capability.",

    "modal-images-text": [
      {
        "modal-image": "images/travelblog-images/travelblog-homepage.png",
        "modal-image-description": "Home page of TravelBlog. The website also has a dark mode.", 
        "modal-image-alt": "tb-img", 
      },
      {
        "modal-image": "images/travelblog-images/travelblog-viewbloggers.png", 
        "modal-image-description": "Bloggers page. If a user clicks on a given blogger's card, they can view that blogger's profile.",
        "modal-image-alt": "rbb-burgers-img", 
      },
      {
        "modal-image": "images/travelblog-images/travelblog-viewbloggerprofile.png", 
        "modal-image-description": "Blogger profile page. Users can view the blogs a blogger has created as well as their bio.",
        "modal-image-alt": "rbb-appetizers-img", 
      },
      {
        "modal-image": "images/travelblog-images/travelblog-viewblog.png",
        "modal-image-description": "Blog page. Users can view blogs, which belong to a given blogger. Within a blog, there can be zero or more posts.",
        "modal-image-alt": "rbb-beverages-img", 
      },
      {
        "modal-image": "images/travelblog-images/travelblog-viewpost.png",
        "modal-image-description": "Post page. Users can view posts, which belong to a given blog. Within a post, there is text and image content.",
        "modal-image-alt": "rbb-beverages-img", 
      },
      {
        "modal-image": "images/travelblog-images/travelblog-register.png",
        "modal-image-description": "Sign-up page. Users can create an account with TravelBlog. The user has the option to create an account using Google OAuth.",
        "modal-image-alt": "rbb-beverages-img", 
      },
      {
        "modal-image": "images/travelblog-images/travelblog-login.png",
        "modal-image-description": "Login page. Users can login to their TravelBlog account on this page. They also have the ability to sign in with Google OAuth if that is how their account was created.",
        "modal-image-alt": "rbb-beverages-img", 
      },
      {
        "modal-image": "images/travelblog-images/travelblog-about.png",
        "modal-image-description": "About page. Users can read about TravelBlog and access the Policy and Terms of Use pages from here.",
        "modal-image-alt": "rbb-bill-img", 
      },
      {
        "modal-image": "images/travelblog-images/travelblog-help.png",
        "modal-image-description": "Help page. Users can read how to use TravelBlog and message an admin if they have a question.",
        "modal-image-alt": "rbb-bill-img", 
      },
      {
        "modal-image": "images/travelblog-images/travelblog-homepagesignedin.png",
        "modal-image-description": "Home page of TravelBlog when a user is signed in to their account.", 
        "modal-image-alt": "tb-img", 
      },
      {
        "modal-image": "images/travelblog-images/travelblog-usersownprofile.png",
        "modal-image-description": "User profile page. Users can access their profile after they sign-up or sign-in to create/edit content.",
        "modal-image-alt": "rbb-bill-img", 
      },
      {
        "modal-image": "images/travelblog-images/travelblog-usereditprofile.png",
        "modal-image-description": "Edit account page. Users can edit their profile information when signed in.",
        "modal-image-alt": "rbb-bill-img", 
      },
      {
        "modal-image": "images/travelblog-images/travelblog-usercreateblog.png",
        "modal-image-description": "Create blog page. If signed in, users can create a new blog that can serve as a container of posts. Users can also edit their blogs.",
        "modal-image-alt": "rbb-bill-img", 
      },
      {
        "modal-image": "images/travelblog-images/travelblog-usercreatepost.png",
        "modal-image-description": "Create post page. If signed in, users can create a new post that can contain text and image content. Users can also edit their posts.",
        "modal-image-alt": "rbb-bill-img", 
      },
    ],

    "modal-final-text": "The TravelBlog web application is hosted on a Heroku server. The website also uses services from Heroku like a SQL database and Redis. Cloudflare, a separate service, is used for handling network routing and traffic. If you have any questions on the technical details of TravelBlog, feel free to contact me.",
    
    "modal-links": [
      {
        "modal-link-reference": "contact.html",
        "modal-link-icon": "fa-solid fa-phone",
        "modal-link-description": " Contact me to view on GitHub",
      },
      {
        "modal-link-reference": "https://travelblog.social/",
        "modal-link-icon": "fa-solid fa-arrow-up-right-from-square",
        "modal-link-description": " View project online",
      },
    ],

    "modal-bottom-button": "bottom-exit-modal12",
  },
  {
    "modal-id": "portfolioModal11",
    "modal-span-id": "exit-modal11",
    "modal-heading": "Resaurant Webpage",
    "modal-subheading": "Webpage made for a fictional restaurant.",
    "modal-description": "The restaurant website project was created to practice my skills in HTML, CSS, and responsive layout design. The site was made in my Intro to Web Design class at the University of Wisconsin - La Crosse. A major focus of the project was to design a website that was responsive to different screen sizes. The RBB website can be viewed on devices ranging from a desktop to a mobile phone. An important note is that all the images used in the project belong to different sources. I attributed all the images used for the website in a document attached to my GitHub repository.",

    "modal-images-text": [
      {
        "modal-image": "images/riversideburgerbash-images/rbb-home.png",
        "modal-image-description": "Home page of restaurant website.", 
        "modal-image-alt": "rbb-img", 
      },
      {
        "modal-image": "images/riversideburgerbash-images/rbb-burgers.png", 
        "modal-image-description": "Burgers menu page. Users can view the different burger meal options offered by the restaurant. A CSS counter is used to number the burger menu items.",
        "modal-image-alt": "rbb-burgers-img", 
      },
      {
        "modal-image": "images/riversideburgerbash-images/rbb-appetizers.png", 
        "modal-image-description": "Appetizers menu page. Users can view the different appetizer options offered by the restaurant. A CSS counter is used to number the appetizer menu items.",
        "modal-image-alt": "rbb-appetizers-img", 
      },
      {
        "modal-image": "images/riversideburgerbash-images/rbb-beverages.png",
        "modal-image-description": "Beverages menu page. Users can view the different beverage options offered by the restaurant. A CSS counter is used to number the beverage menu items.",
        "modal-image-alt": "rbb-beverages-img", 
      },
      {
        "modal-image": "images/riversideburgerbash-images/rbb-bill.png",
        "modal-image-description": "Customer bill page. Users can calculate out their bill for orders they place. The order calculations are displayed in an HTML table. There is not a database or service connected to any of these actions.",
        "modal-image-alt": "rbb-bill-img", 
      },
    ],

    "modal-final-text": "The restaurant webpage is hosted on GitHub pages, which is a free service. Given the fact that the website is comprised primarily of HTML and CSS, hosting it on a more complex server that can process requests was not needed.",
    
    "modal-links": [
      {
        "modal-link-reference": "https://github.com/Andrew-EKrause/RBB-Restaurant-Webpage",
        "modal-link-icon": "fa-brands fa-github",
        "modal-link-description": " View project on GitHub",
      },
      {
        "modal-link-reference": "https://andrew-ekrause.github.io/RBB-Restaurant-Webpage/",
        "modal-link-icon": "fa-solid fa-arrow-up-right-from-square",
        "modal-link-description": " View project online",
      },
    ],

    "modal-bottom-button": "bottom-exit-modal11",
  },
  {
    "modal-id": "portfolioModal10",
    "modal-span-id": "exit-modal10",
    "modal-heading": "Simple Compiler",
    "modal-subheading": "Compiler written to convert a C-like language into MIPS assembly code.",
    "modal-description": "The Compiler was created as a semester project for my CS 442 course at my university. The project is a simple machine that can take a langage similar to C and convert it into MIPS assembly instructions. The generated programs, consisting of the MIPS instructions, can be run in a simulator such as Mars to obtain the results. The Compiler consists of five main parts: SymbolTable.c, IOMngr.c, lexFile.l, ExprEval.y, and Semantics.c. Each file is responsible for ensuring that the compilation process successfully executes. The three main file types are lex (flex for Mac), yacc (bison for Mac), and C. Makefiles and other scripts are used to run the compiler on the command line in order to process C-like programs that are passed in as input.",

    "modal-images-text": [
      {
        "modal-image": "images/compiler-images/compiler-grammar.png", 
        "modal-image-description": "Part of compiler grammar. The project can be executed on a terminal and the output can then be run in a Mars Simulator. Please contact me to visit my GitHub repository for additional details.",
        "modal-image-alt": "compiler-grammar-img", 
      },
    ],

    "modal-final-text": "The Compiler project is hosted in a GitHub repository on my account. Given the need to maintain academic integrity, I have restricted access to this project. If you wish to view it, please contact me.",
    
    "modal-links": [
      {
        "modal-link-reference": "contact.html",
        "modal-link-icon": "fa-solid fa-phone",
        "modal-link-description": " Contact me to view project",
      },
    ],

    "modal-bottom-button": "bottom-exit-modal10",
  },
  {
    "modal-id": "portfolioModal9",
    "modal-span-id": "exit-modal9",
    "modal-heading": "Patient Care Manager",
    "modal-subheading": "Web application created using Express.js as framework.",
    "modal-description": "Patient Care Manager (PCM) was created as a semester project for a databases class at my university. The project is an implementation of fullstack web development. HTML, CSS, JavaScript, and a SQL database were used to create the website. The PCM project was created for the purpose of helping Mayo Clinic (in actuality it is not used by the health organization), a leading provider in health care, organize and manage hospital information. Users can interact with Patient, Treatment, Provider, and Department data. Users have the ability to view the different entity types in the database, create new data, edit existing data, and remove data.",

    "modal-images-text": [
      {
        "modal-image": "images/patientcaremanager-images/pcm-home.png",
        "modal-image-description": "Home page of Patient Care Manager website.", 
        "modal-image-alt": "pcm-img", 
      },
      {
        "modal-image": "images/patientcaremanager-images/pcm-about.png", 
        "modal-image-description": "About page. Users can read about the features of the web application as well as download a project document with additional details.",
        "modal-image-alt": "pcm-about-img", 
      },
      {
        "modal-image": "images/patientcaremanager-images/pcm-view.png", 
        "modal-image-description": "Views page. Users can select which table in the database they would like to view and interact with. In the following images below, the user has selected the Patients table.", 
        "modal-image-alt": "pcm-views-img", 
      },
      {
        "modal-image": "images/patientcaremanager-images/pcm-patients.png",
        "modal-image-description": "Patients page. On this page, users can view all of the patients in the database. The patients page is one of five other pages with data that the user can view.",
        "modal-image-alt": "pcm-patients-img", 
      },
      {
        "modal-image": "images/patientcaremanager-images/pcm-patients-expanded.png",
        "modal-image-description": "Expanded view of a specific patient. To view more patient details, users can click the info (i) icon listed as one of the buttons on a given patient.",
        "modal-image-alt": "pcm-patients-expanded-img", 
      },
      {
        "modal-image": "images/patientcaremanager-images/pcm-patients-create.png",
        "modal-image-description": "Create new patient page for users to add a new patient to the patient table of the database. Data validation is included for the input fields on this page.",
        "modal-image-alt": "pcm-patients-create-img", 
      },
      {
        "modal-image": "images/patientcaremanager-images/pcm-patients-edit.png",
        "modal-image-description": "Edit patient page. Users can click on the pencil icon for any given patient to edit the data attributes for that patient and submit the changes to the database.",
        "modal-image-alt": "pcm-patients-edit-img", 
      },
      {
        "modal-image": "images/patientcaremanager-images/pcm-patients-delete.png",
        "modal-image-description": "Patient delete action. Users have the ability to remove any given patient in the database. Users must confirm that they wish to proceed with removing a patient from the database.",
        "modal-image-alt": "pcm-patients-delete-img", 
      },
    ],

    "modal-final-text": "The Patient Care Manager website is hosted on a Heroku server. Heroku is a cloud platform that offers a secure place to host server-based projects on the world wide web.",
    
    "modal-links": [
      {
        "modal-link-reference": "https://github.com/Andrew-EKrause/Patient-Care-Manager",
        "modal-link-icon": "fa-brands fa-github",
        "modal-link-description": " View project on GitHub",
      },
      {
        "modal-link-reference": "https://patient-care-manager.herokuapp.com/",
        "modal-link-icon": "fa-solid fa-arrow-up-right-from-square",
        "modal-link-description": " View project online",
      },
    ],

    "modal-bottom-button": "bottom-exit-modal9",
  },
  {
    "modal-id": "portfolioModal8",
    "modal-span-id": "exit-modal8",
    "modal-heading": "Park Finder",
    "modal-subheading": "Simple application of Django in web development.",
    "modal-description": "Park Finder was created as a group semester project for a Python class that I took my junior year of college. The Park Finder website utilizes a simple API obtained from the National Park Services (NPS). The API provides information about national parks and places in the United States. I was responsible for connecting the backend framework of the website to the API and displaying the different locations on the website. Pictures on navigating the website are below.",

    "modal-images-text": [
      {
        "modal-image": "images/parkfinder-images/parkfinder-home.png",
        "modal-image-description": "Home page of Park Finder website.", 
        "modal-image-alt": "parkfinder-img", 
      },
      {
        "modal-image": "images/parkfinder-images/parkfinder-about.png", 
        "modal-image-description": "About page of Park Finder website. Descriptions of the site features are provided.", 
        "modal-image-alt": "parkfinder-about-img", 
      },
      {
        "modal-image": "images/parkfinder-images/parkfinder-select.png", 
        "modal-image-description": "State selection page. Users choose a state in order to find locations in that state.", 
        "modal-image-alt": "parkfinder-select-img", 
      },
      {
        "modal-image": "images/parkfinder-images/parkfinder-specific.png", 
        "modal-image-description": "Parks and places to view are presented as a list of modules within any given state selected by the user.",
        "modal-image-alt": "parkfinder-specific-img", 
      },
      {
        "modal-image": "images/parkfinder-images/parkfinder-location.png",
        "modal-image-description": "Each module, representing a location, can be expanded to view more details about that park or place.",
        "modal-image-alt": "parkfinder-location-img", 
      },
      {
        "modal-image": "images/parkfinder-images/parkfinder-login.png",
        "modal-image-description": "Login screen for user to obtain an account with Park Finder (currently in development).",
        "modal-image-alt": "parkfinder-login-img", 
      },
    ],

    "modal-final-text": "The Park Finder website is hosted on a Heroku server. Heroku is a cloud platform that offers a secure place to host server-based projects on the world wide web.",
    
    "modal-links": [
      {
        "modal-link-reference": "https://github.com/Andrew-EKrause/ParkFinder-Web-App",
        "modal-link-icon": "fa-brands fa-github",
        "modal-link-description": " View project on GitHub",
      },
      {
        "modal-link-reference": "https://park-finder-project.herokuapp.com/",
        "modal-link-icon": "fa-solid fa-arrow-up-right-from-square",
        "modal-link-description": " View project online",
      },
    ],

    "modal-bottom-button": "bottom-exit-modal8",
  },
  {
    "modal-id": "portfolioModal7",
    "modal-span-id": "exit-modal7",
    "modal-heading": "Team Aptiv",
    "modal-subheading": "Web application created using Express.js as framework.",
    "modal-description": "Team Aptiv was created as a collaborative semester long project for a Software Engineering class at my university. The project is an implementation of fullstack web development. Team Aptiv is a website created for the purpose of helping the nonprofit organization of Aptiv. The site hosts different community events created by an admin user. Other users have the ability  to view the events. If the other users obtain an account with the Team Aptiv website, they can sign up for the events and donate to the events.",

    "modal-images-text": [
      {
        "modal-image": "images/teamaptiv-images/teamaptiv-home.png",
        "modal-image-description": "Home page of Team Aptiv website.", 
        "modal-image-alt": "teamaptiv-img", 
      },
      {
        "modal-image": "images/teamaptiv-images/teamaptiv-events.png", 
        "modal-image-description": "Events page. Users can view the different community events that are created and posted by an admin user.", 
        "modal-image-alt": "teamaptiv-events-img", 
      },
      {
        "modal-image": "images/teamaptiv-images/teamaptiv-specific.png", 
        "modal-image-description": "Specific event page. Users can view the details of each event such as the time, location, number of needed volunteers, and donation goal.",
        "modal-image-alt": "teamaptiv-specific-img", 
      },
      {
        "modal-image": "images/teamaptiv-images/teamaptiv-mission.png",
        "modal-image-description": "Mission page. On this page, users can download a user help manual, see the organization mission statement, and make an unrestricted donation to the company (payment functions not implemented).",
        "modal-image-alt": "teamaptiv-mission-img", 
      },
      {
        "modal-image": "images/teamaptiv-images/teamaptiv-register.png",
        "modal-image-description": "Registration screen for user to create an account with Team Aptiv. The user has the option to create an account using their Google account via OAuth.",
        "modal-image-alt": "teamaptiv-register-img", 
      },
      {
        "modal-image": "images/teamaptiv-images/teamaptiv-login.png",
        "modal-image-description": "Login screen for user to obtain an account with Team Aptiv. The user has the ability to sign into their account with Google OAuth as well.",
        "modal-image-alt": "teamaptiv-login-img", 
      },
      {
        "modal-image": "images/teamaptiv-images/teamaptiv-user.png",
        "modal-image-description": "User account page. A registered user can view events they have signed up for as well as change various settings on the website.",
        "modal-image-alt": "teamaptiv-user-img", 
      },
      {
        "modal-image": "images/teamaptiv-images/teamaptiv-admin.png",
        "modal-image-description": "Admin account page. The admin has the abilities that a regular registered user has. The admin can also create events, cancel events, deactivate user accounts, and activate user accounts.",
        "modal-image-alt": "teamaptiv-admin-img", 
      },
    ],

    "modal-final-text": "The Team Aptiv website is hosted on a Heroku server. Heroku is a cloud platform that offers a secure place to host server-based projects on the world wide web.",
    
    "modal-links": [
      {
        "modal-link-reference": "https://github.com/Andrew-EKrause/TeamAptiv-Web-App",
        "modal-link-icon": "fa-brands fa-github",
        "modal-link-description": " View project on GitHub",
      },
      {
        "modal-link-reference": "https://team-aptiv-project.herokuapp.com/",
        "modal-link-icon": "fa-solid fa-arrow-up-right-from-square",
        "modal-link-description": " View project online",
      },
    ],

    "modal-bottom-button": "bottom-exit-modal7",
  },
  {
    "modal-id": "portfolioModal6",
    "modal-span-id": "exit-modal6",
    "modal-heading": "Promotional Webpage",
    "modal-subheading": "Website made to promote a fictional app.",
    "modal-description": "The promotional webpage project was created to practice my skills in HTML and CSS. An important focus in the project was also to design a website that was responsive to different screen sizes. When the screen size changes, the website layout changes to maintain a clear, clean format that is easy to navigate. The theme of the website was to promte a fake application called Habit Helper.",

    "modal-images-text": [
      {
        "modal-image": "images/apppromotion-images/apppromotion-home.png", 
        "modal-image-description": "Home page of app promotion website.",
        "modal-image-alt": "apppromotion-img", 
      },
      {
        "modal-image": "images/apppromotion-images/apppromotion-ad.png",
        "modal-image-description": "Attributes section of website. Here the top features of the app that the website is promoting are highlighted.", 
        "modal-image-alt": "apppromotion-ad-img", 
      },
      {
        "modal-image": "images/apppromotion-images/apppromotion-users.png", 
        "modal-image-description": "User section of website. Users who have used the app are listed with a brief quote promoting the app. This information is presented through a Bootstrap carousel (users are fake just like the Habit Helper app they are reviewing).", 
        "modal-image-alt": "apppromotion-users-img", 
      },
      {
        "modal-image": "images/apppromotion-images/apppromotion-cost.png",
        "modal-image-description": "Price plan section of the website. The different monthly plans and their respective prices are listed out.",
        "modal-image-alt": "apppromotion-cost-img", 
      },
      {
        "modal-image": "images/apppromotion-images/apppromotion-final.png",
        "modal-image-description": "Final advertisement section of website. The last promotional section of the website is listed along with the options to download the fictional application.",
        "modal-image-alt": "apppromotion-final-img", 
      },
    ],

    "modal-final-text": "The promotional webpage is hosted on GitHub pages, which is a free service. Given the fact that the website is comprised of HTML and CSS only, hosting it on a more complex server that can process requests was not neccessary.",
    
    "modal-links": [
      {
        "modal-link-reference": "https://github.com/Andrew-EKrause/HabitHelper-Promotional-Webpage",
        "modal-link-icon": "fa-brands fa-github",
        "modal-link-description": " View project on GitHub",
      },
      {
        "modal-link-reference": "https://andrew-ekrause.github.io/HabitHelper-Promotional-Webpage/",
        "modal-link-icon": "fa-solid fa-arrow-up-right-from-square",
        "modal-link-description": " View project online",
      },
    ],

    "modal-bottom-button": "bottom-exit-modal6",
  },
  {
    "modal-id": "portfolioModal5",
    "modal-span-id": "exit-modal5",
    "modal-heading": "First Personal Webpage",
    "modal-subheading": "Implementation of HTML and CSS to create my first personal website.",
    "modal-description": "My first personal website was created to help strengthen my skills in HTML and CSS. I also wanted to have my own webpage for job recuiters to view and assess my skill set. My personal site is comprised of three primary sections. The first section explains a little about me, the second section lists out my skills with brief descriptions, and the third section provides my contact information.",

    "modal-images-text": [
      {
        "modal-image": "images/personalwebpage-images/firstpersonal-home.png", 
        "modal-image-description": "Home page of personal website.",
        "modal-image-alt": "personalwebpage-img", 
      },
      {
        "modal-image": "images/personalwebpage-images/firstpersonal-about.png",
        "modal-image-description": "About section. I provide a brief description of my educational background as well as my interests and hobbies.", 
        "modal-image-alt": "personalwebpage-about-img", 
      },
      {
        "modal-image": "images/personalwebpage-images/firstpersonal-skills.png", 
        "modal-image-description": "Skills section. I list my skills in Computer Science along with a brief description of each skill.", 
        "modal-image-alt": "personalwebpage-skills-img", 
      },
      {
        "modal-image": "images/personalwebpage-images/firstpersonal-contact.png",
        "modal-image-description": "Contact section. I list out my contact information as well as a button linked to a mail application from which the user can message me from.",
        "modal-image-alt": "personalwebpage-contact-img", 
      },
    ],

    "modal-final-text": "The personal webpage is hosted on GitHub pages, which is a free service. Given the fact that the website is comprised of HTML and CSS only, hosting it on a more complex server that can process requests was not neccessary.",
    
    "modal-links": [
      {
        "modal-link-reference": "https://github.com/Andrew-EKrause/Personal-Webpage",
        "modal-link-icon": "fa-brands fa-github",
        "modal-link-description": " View project on GitHub",
      },
      {
        "modal-link-reference": "https://andrew-ekrause.github.io/Personal-Webpage/",
        "modal-link-icon": "fa-solid fa-arrow-up-right-from-square",
        "modal-link-description": " View project online",
      },
    ],

    "modal-bottom-button": "bottom-exit-modal5",
  },
  {
    "modal-id": "portfolioModal4",
    "modal-span-id": "exit-modal4",
    "modal-heading": "Office Hours Simulation",
    "modal-subheading": "Implementation of different queues such as FIFO to generate a professor's schedule based on varying availabilities.",
    "modal-description": "The Office Hours Simulation was created as a final project for an introductory course in C programming at the University of Wisconsin - La Crosse. The program runs a simulation of office hours using a FIFO algorithm and a Priority algorithm. The program reads in a text file containing student availabilities, the professor's availability, and the type of meeting taking place. If the professor cannot meet with a student for all of their allotted time on a day given constraints, the student is given time on the next available day to complete the visit. A summary of the visits and additional statistics are printed out at the completion of the program on the terminal window.",

    "modal-images-text": [
      {
        "modal-image": "images/officesimulation-images/officesimulation-run.png", 
        "modal-image-description": "The project is run on a terminal window. The program is compiled via tools such as makefiles and commands pertaining to the C programming language.",
        "modal-image-alt": "officesimulation-run-img", 
      },
      {
        "modal-image": "images/officesimulation-images/officesimulation-final.png",
        "modal-image-description": "Example output with a FIFO queue. The final statistics related to the simulation are printed out on the terminal window at the conclusion of the program.", 
        "modal-image-alt": "officesimulation-final-img", 
      }, 
    ],

    "modal-final-text": "The Offic Hour Simulation project is hosted in a GitHub repository on my account. To view more details about this project and run the simulation, visit my repository via the link provided below.",
    
    "modal-links": [
      {
        "modal-link-reference": "https://github.com/Andrew-EKrause/Office-Hour-Simulation",
        "modal-link-icon": "fa-brands fa-github",
        "modal-link-description": " View project on GitHub",
      },
    ],

    "modal-bottom-button": "bottom-exit-modal4",
  },
  {
    "modal-id": "portfolioModal3",
    "modal-span-id": "exit-modal3",
    "modal-heading": "Hash Table",
    "modal-subheading": "Data structure created using Java to practice mapping keys to values.",
    "modal-description": "The Hash Table project was created as part of a software design course that I took during my sophomore year at my university. The data structure was created using the Eclipse integrated development environment (IDE) and Java. The hash table, in this implementation of the structure, is an array of linked lists. Keys are randomly generated and assigned to values in the hash table. In this case, the keys are the names of people and the values are numbers.",

    "modal-images-text": [
      {
        "modal-image": "images/hashtable-images/hashtable-drawing.png", 
        "modal-image-description": "A hash table is a data structure that maps certain keys to different values. An example of utilizing a hash table would be encrypting user information such as account passwords.",
        "modal-image-alt": "hashtable-img", 
      },
      {
        "modal-image": "images/hashtable-images/hashtable-output.png",
        "modal-image-description": "The project can be run on a terminal (like the one shown above) or in an IDE such as Eclipse. Please visit my GitHub repository (listed below) for additional details.", 
        "modal-image-alt": "hashtable-output-img", 
      }, 
    ],

    "modal-final-text": "The Hash Table project is hosted in a GitHub repository on my account. To view more details about this project and run it, visit my repository via the link provided below.",
    
    "modal-links": [
      {
        "modal-link-reference": "https://github.com/Andrew-EKrause/Hash-Table",
        "modal-link-icon": "fa-brands fa-github",
        "modal-link-description": " View project on GitHub",
      },
    ],

    "modal-bottom-button": "bottom-exit-modal3",
  },
  {
    "modal-id": "portfolioModal2",
    "modal-span-id": "exit-modal2",
    "modal-heading": "Java Pong",
    "modal-subheading": "Simplified version of the classic pong game that was written using Java.",
    "modal-description": "The Java Pong project is a simple game where the user uses a slider at the bottom of the game screen to prevent the ball from getting past the bottom. The ball bounces off the different sides of the game screen and gradually makes its what towards the bottom of the screen where the user controls a blue slider. After coming in contact with the blue slider at the bottom of the screen, the ball bounces up along the sides of the screen again before beginning to make its way towards the bottom again. After every fifth bounce off of the blue slider at the bottom of the screen, the speed of the ball moving along the screen increases. The goal of the game is to try and get as many bounces off the blue slider as possible.",

    "modal-images-text": [
      {
        "modal-image": "images/javapong-images/javapong-game.png", 
        "modal-image-description": "Java pong game screen. The project can be run on a terminal or in an IDE such as Eclipse. Please visit my GitHub repository (listed below) for additional details.",
        "modal-image-alt": "javapong-game-img", 
      }, 
    ],

    "modal-final-text": "The Java Pong project is hosted in a GitHub repository on my account. To view more details about this project and run it, visit my repository via the link provided below.",
    
    "modal-links": [
      {
        "modal-link-reference": "https://github.com/Andrew-EKrause/Java-Pong",
        "modal-link-icon": "fa-brands fa-github",
        "modal-link-description": " View project on GitHub",
      },
    ],

    "modal-bottom-button": "bottom-exit-modal2",
  },
  {
    "modal-id": "portfolioModal1",
    "modal-span-id": "exit-modal1",
    "modal-heading": "First Java Program",
    "modal-subheading": "Simple drawing created using different shape classes in Java.",
    "modal-description": "The project is a simple program written in Java that generates an image of a clock tower on my university campus as well as some background features. The image is comprised of different shapes that are manipulated in both size and location to form the simple image. I created this project during my freshman year of college in my first computer science class.",

    "modal-images-text": [
      {
        "modal-image": "images/firstdrawing-images/firstdrawing-home.png", 
        "modal-image-description": "Drawing generated by the Java program. The drawing is a simple collection of shapes that form the image.",
        "modal-image-alt": "firstdrawing2-img", 
      }, 
    ],

    "modal-final-text": "The First Java Program project is hosted in a GitHub repository on my account. To view more details about this project and run it, visit my repository via the link provided below.",
    
    "modal-links": [
      {
        "modal-link-reference": "https://github.com/Andrew-EKrause/Java-Drawing",
        "modal-link-icon": "fa-brands fa-github",
        "modal-link-description": " View project on GitHub",
      },
    ],

    "modal-bottom-button": "bottom-exit-modal1",
  },
];

/*
 * The function adds the project modals to
 * the DOM. The projects are displayed on
 * the website.
 */
function addProjectModals() {

  // Create a variable to obtain the div that 
  // the project modals will be created within.
  let modalList = document.querySelector(".modals-section");

  // Loop through the list of modal objects
  // and output the content to the website.
  myProjectModals.forEach(myProjectModals => {

    // Create a new div tag element for the modal.
    let modalDiv = document.createElement("div");
    modalDiv.setAttribute("id", myProjectModals["modal-id"]);
    modalDiv.setAttribute("role", "dialog");
    modalDiv.setAttribute("class", "modal-bg");
    modalList.appendChild(modalDiv);

    // Create a new div tag element for the modal-dialog.
    let modalDialogDiv = document.createElement("div");
    modalDialogDiv.setAttribute("class", "modal-dialog");
    modalDiv.appendChild(modalDialogDiv);

    // Create a new div tag element for the close-modal-position.
    let modalCloseDiv = document.createElement("div");
    modalCloseDiv.setAttribute("class", "close-modal-position");
    modalDialogDiv.appendChild(modalCloseDiv);

    // Create a new span tag element for the X-icon.
    let exitSpanTag = document.createElement("span");
    exitSpanTag.setAttribute("id", myProjectModals["modal-span-id"]);
    exitSpanTag.setAttribute("class", "modal-close");
    exitSpanTag.setAttribute("href", "#close");
    modalCloseDiv.appendChild(exitSpanTag);

    // Create the X-icon.
    let exitIcon = document.createElement("i");
    exitIcon.setAttribute("class", "modal-x-icon fa fa-solid fa-circle-xmark fa-2x");
    exitSpanTag.appendChild(exitIcon);

    // Create the modal container div.
    let modalContainerDiv = document.createElement("div");
    modalContainerDiv.setAttribute("class", "modal-container");
    modalDialogDiv.appendChild(modalContainerDiv);

    // Create the modal information div.
    let modalInformationDiv = document.createElement("div");
    modalInformationDiv.setAttribute("class", "modal-information");
    modalContainerDiv.appendChild(modalInformationDiv);

    // Create the modal content div.
    let modalContentDiv = document.createElement("div");
    modalContentDiv.setAttribute("class", "modal-content");
    modalInformationDiv.appendChild(modalContentDiv);

    // Create the modal row div.
    let modalRowDiv = document.createElement("div");
    modalRowDiv.setAttribute("class", "modal-row");
    modalContentDiv.appendChild(modalRowDiv);

    // Create the modal column div.
    let modalColumnDiv = document.createElement("div");
    modalColumnDiv.setAttribute("class", "col-lg-10 mx-auto");
    modalRowDiv.appendChild(modalColumnDiv);

    // Create the modal body div.
    let modalBodyDiv = document.createElement("div");
    modalBodyDiv.setAttribute("class", "modal-body");
    modalColumnDiv.appendChild(modalBodyDiv);

    // Create the modal heading.
    let modalHeading = document.createElement("h2");
    modalHeading.setAttribute("class", "modal-heading");
    modalHeading.appendChild(document.createTextNode(myProjectModals["modal-heading"]));
    modalBodyDiv.appendChild(modalHeading);

    // Create the modal subheading.
    let modalSubHeading = document.createElement("p");
    modalSubHeading.setAttribute("class", "modal-text subheading-text-center");
    modalSubHeading.appendChild(document.createTextNode(myProjectModals["modal-subheading"]));
    modalBodyDiv.appendChild(modalSubHeading);

    // Create the first modal description.
    let modalDescription = document.createElement("p");
    modalDescription.setAttribute("class", "modal-text");
    modalDescription.appendChild(document.createTextNode(myProjectModals["modal-description"]));
    modalBodyDiv.appendChild(modalDescription);

    // Create the pictures with descriptions for each modal.
    // This is completed via a for-each loop that visits each
    // element in the object images and captions attribute array.
    myProjectModals["modal-images-text"].forEach(modalImages => {

      // Create the div that stores a given image and description.
      let descriptiveDiv = document.createElement("div");
      descriptiveDiv.setAttribute("class", "col-lg-4 col-md-6 mb-5 modal-pic-card");
      modalBodyDiv.appendChild(descriptiveDiv);

      // Create the figure element to help store the image and its caption.
      let descriptiveDivFigure = document.createElement("figure");
      descriptiveDiv.appendChild(descriptiveDivFigure);

      // Create the descriptive image that goes within the figure.
      let descriptiveDivImage = document.createElement("img");
      descriptiveDivImage.setAttribute("class", "modal-info-pic");
      descriptiveDivImage.setAttribute("src", modalImages["modal-image"]);
      descriptiveDivImage.setAttribute("alt", modalImages["modal-image-alt"]);
      descriptiveDivFigure.appendChild(descriptiveDivImage);

      // Create a figcaption to help store the actual description.
      let descriptiveDivFigcaption = document.createElement("figcaption");
      descriptiveDivFigcaption.setAttribute("class", "modal-pic-container");
      descriptiveDivFigcaption.setAttribute("src", modalImages["modal-image"]);
      descriptiveDivFigcaption.setAttribute("alt", modalImages["modal-image-alt"]);
      descriptiveDivFigure.appendChild(descriptiveDivFigcaption);

      // Create a paragraph tag to store the actual description.
      let descriptiveDivParagraph = document.createElement("p");
      descriptiveDivParagraph.setAttribute("class", "modal-pic-text");
      descriptiveDivParagraph.appendChild(document.createTextNode(modalImages["modal-image-description"]));
      descriptiveDivFigcaption.appendChild(descriptiveDivParagraph);
    });

    // Create a paragraph tag to store the final description of the project.
    let finalDescriptionParagraph = document.createElement("p");
    finalDescriptionParagraph.setAttribute("class", "modal-text");
    finalDescriptionParagraph.appendChild(document.createTextNode(myProjectModals["modal-final-text"]));
    modalBodyDiv.appendChild(finalDescriptionParagraph);

    // Create the div that contains the modal links and close button.
    let linkContainerDiv = document.createElement("div");
    linkContainerDiv.setAttribute("class", "modal-links-container");
    modalBodyDiv.appendChild(linkContainerDiv);

    // Create the link(s) to the project for each modal.
    // This is completed via a for-each loop that visits each
    // element in the object links attribute array.
    myProjectModals["modal-links"].forEach(modalLink => {

      // Create an anchor tag to store the actual link for the project.
      let modalLinkAnchor = document.createElement("a");
      modalLinkAnchor.setAttribute("href", modalLink["modal-link-reference"]);
      modalLinkAnchor.setAttribute("target", "_blank");
      modalLinkAnchor.setAttribute("class", "modal-link-item");
      linkContainerDiv.appendChild(modalLinkAnchor);

      // Create a b tag to store the link text.
      let modalLinkB = document.createElement("b");
      modalLinkAnchor.appendChild(modalLinkB);

      // Create a i tag for the link icon.
      let modalLinkIcon = document.createElement("i");
      modalLinkIcon.setAttribute("class", modalLink["modal-link-icon"]);
      modalLinkB.appendChild(modalLinkIcon);

      // Add the text for the b tag that stores the link text.
      modalLinkB.appendChild(document.createTextNode(modalLink["modal-link-description"]));
    });

    // Create an anchor tag to show the bottom close button.
    let modalCloseButtonAnchor = document.createElement("a");
    modalCloseButtonAnchor.setAttribute("id", myProjectModals["modal-bottom-button"]);
    modalCloseButtonAnchor.setAttribute("class", "btn btn-dark btn-l model-close bottom-modal-button");
    modalCloseButtonAnchor.setAttribute("href", "#close");
    linkContainerDiv.appendChild(modalCloseButtonAnchor);

    // Create an i tag to include the bottom close button icon.
    let modalCloseButtonI = document.createElement("i");
    modalCloseButtonI.setAttribute("class", "fa fa-times fa-times-bottom");
    modalCloseButtonAnchor.appendChild(modalCloseButtonI);

    // Add text to the anchor tag.
    modalCloseButtonAnchor.appendChild(document.createTextNode(" Close"));
  });
}

// --> SECTION: Style the modals on the website.
// WHENEVER YOU ADD A NEW MODAL, YOU MUST ALSO ADD NEW FUNCTION ATTRIBUTES.

/*
 * The function adds the needed functions
 * to any given modal when it is clicked
 * and opened.
 */
function addModalFunctions() {

  // MODAL 1 - open modal function.
  var anchor1 = document.getElementById("portfolio-item1");
  var modal1 = document.getElementById("portfolioModal1");

  // When the user clicks the button, open the modal.
  anchor1.onclick = function() {
    modal1.classList.add('bg-active');
    modal1.scrollTo(0, 0);
    document.body.classList.add('overflowHidden');
  }

  // ==================================================================

  // MODAL 2 - open modal function.
  var anchor2 = document.getElementById("portfolio-item2");
  var modal2 = document.getElementById("portfolioModal2");

  // When the user clicks the button, open the modal.
  anchor2.onclick = function() {
    modal2.classList.add('bg-active');
    modal2.scrollTo(0, 0);
    document.body.classList.add('overflowHidden');
  }

  // ==================================================================

  // MODAL 3 - open modal function.
  var anchor3 = document.getElementById("portfolio-item3");
  var modal3 = document.getElementById("portfolioModal3");

  // When the user clicks the button, open the modal.
  anchor3.onclick = function() {
    modal3.classList.add('bg-active');
    modal3.scrollTo(0, 0);
    document.body.classList.add('overflowHidden');
  }

  // ==================================================================

  // MODAL 4 - open modal function.
  var anchor4 = document.getElementById("portfolio-item4");
  var modal4 = document.getElementById("portfolioModal4");

  // When the user clicks the button, open the modal.
  anchor4.onclick = function() {
    modal4.classList.add('bg-active');
    modal4.scrollTo(0, 0);
    document.body.classList.add('overflowHidden');
  }

  // ==================================================================

  // MODAL 5 - open modal function.
  var anchor5 = document.getElementById("portfolio-item5");
  var modal5 = document.getElementById("portfolioModal5");

  // When the user clicks the button, open the modal.
  anchor5.onclick = function() {
    modal5.classList.add('bg-active');
    modal5.scrollTo(0, 0);
    document.body.classList.add('overflowHidden');
  }

  // ==================================================================

  // MODAL 6 - open modal function.
  var anchor6 = document.getElementById("portfolio-item6");
  var modal6 = document.getElementById("portfolioModal6");

  // When the user clicks the button, open the modal.
  anchor6.onclick = function() {
    modal6.classList.add('bg-active');
    modal6.scrollTo(0, 0);
    document.body.classList.add('overflowHidden');
  }

  // ==================================================================

  // MODAL 7 - open modal function.
  var anchor7 = document.getElementById("portfolio-item7");
  var modal7 = document.getElementById("portfolioModal7");

  // When the user clicks the button, open the modal.
  anchor7.onclick = function() {
    modal7.classList.add('bg-active');
    modal7.scrollTo(0, 0);
    document.body.classList.add('overflowHidden');
  }

  // ==================================================================

  // MODAL 8 - open modal function.
  var anchor8 = document.getElementById("portfolio-item8");
  var modal8 = document.getElementById("portfolioModal8");

  // When the user clicks the button, open the modal.
  anchor8.onclick = function() {
    modal8.classList.add('bg-active');
    modal8.scrollTo(0, 0);
    document.body.classList.add('overflowHidden');
  }

  // ==================================================================

  // MODAL 9 - open modal function.
  var anchor9 = document.getElementById("portfolio-item9");
  var modal9 = document.getElementById("portfolioModal9");

  // When the user clicks the button, open the modal.
  anchor9.onclick = function() {
    modal9.classList.add('bg-active');
    modal9.scrollTo(0, 0);
    document.body.classList.add('overflowHidden');
  }

  // ==================================================================

  // MODAL 10 - open modal function.
  var anchor10 = document.getElementById("portfolio-item10");
  var modal10 = document.getElementById("portfolioModal10");

  // When the user clicks the button, open the modal.
  anchor10.onclick = function() {
    modal10.classList.add('bg-active');
    modal10.scrollTo(0, 0);
    document.body.classList.add('overflowHidden');
  }

  // ==================================================================

  // MODAL 11 - open modal function.
  var anchor11 = document.getElementById("portfolio-item11");
  var modal11 = document.getElementById("portfolioModal11");

  // When the user clicks the button, open the modal.
  anchor11.onclick = function() {
    modal11.classList.add('bg-active');
    modal11.scrollTo(0, 0);
    document.body.classList.add('overflowHidden');
  }

  // ==================================================================

  // MODAL 12 - open modal function.
  var anchor12 = document.getElementById("portfolio-item12");
  var modal12 = document.getElementById("portfolioModal12");

  // When the user clicks the button, open the modal.
  anchor12.onclick = function() {
    modal12.classList.add('bg-active');
    modal12.scrollTo(0, 0);
    document.body.classList.add('overflowHidden');
  }

  // ==================================================================
  // Get the FIRST element that closes the modal (the big 'X').
  // ==================================================================

  // MODAL 1 - close modal top.
  var bigX1 = document.getElementById("exit-modal1");

  // When the user clicks the top button, close the modal.
  bigX1.onclick = function() {
    modal1.classList.remove('bg-active');
    document.body.classList.remove('overflowHidden');
  }

  // ==================================================================

  // MODAL 2 - close modal top.
  var bigX2 = document.getElementById("exit-modal2");

  // When the user clicks the top button, close the modal.
  bigX2.onclick = function() {
    modal2.classList.remove('bg-active');
    document.body.classList.remove('overflowHidden');
  }

  // ==================================================================

  // MODAL 3 - close modal top.
  var bigX3 = document.getElementById("exit-modal3");

  // When the user clicks the top button, close the modal.
  bigX3.onclick = function() {
    modal3.classList.remove('bg-active');
    document.body.classList.remove('overflowHidden');
  }

  // ==================================================================

  // MODAL 4 - close modal top.
  var bigX4 = document.getElementById("exit-modal4");

  // When the user clicks the top button, close the modal.
  bigX4.onclick = function() {
    modal4.classList.remove('bg-active');
    document.body.classList.remove('overflowHidden');
  }

  // ==================================================================

  // MODAL 5 - close modal top.
  var bigX5 = document.getElementById("exit-modal5");

  // When the user clicks the top button, close the modal.
  bigX5.onclick = function() {
    modal5.classList.remove('bg-active');
    document.body.classList.remove('overflowHidden');
  }

  // ==================================================================

  // MODAL 6 - close modal top.
  var bigX6 = document.getElementById("exit-modal6");

  // When the user clicks the top button, close the modal.
  bigX6.onclick = function() {
    modal6.classList.remove('bg-active');
    document.body.classList.remove('overflowHidden');
  }

  // ==================================================================

  // MODAL 7 - close modal top.
  var bigX7 = document.getElementById("exit-modal7");

  // When the user clicks the top button, close the modal.
  bigX7.onclick = function() {
    modal7.classList.remove('bg-active');
    document.body.classList.remove('overflowHidden');
  }

  // ==================================================================

  // MODAL 8 - close modal top.
  var bigX8 = document.getElementById("exit-modal8");

  // When the user clicks the top button, close the modal.
  bigX8.onclick = function() {
    modal8.classList.remove('bg-active');
    document.body.classList.remove('overflowHidden');
  }

  // ==================================================================

  // MODAL 9 - close modal top.
  var bigX9 = document.getElementById("exit-modal9");

  // When the user clicks the top button, close the modal.
  bigX9.onclick = function() {
    modal9.classList.remove('bg-active');
    document.body.classList.remove('overflowHidden');
  }

  // ==================================================================

  // MODAL 10 - close modal top.
  var bigX10 = document.getElementById("exit-modal10");

  // When the user clicks the top button, close the modal.
  bigX10.onclick = function() {
    modal10.classList.remove('bg-active');
    document.body.classList.remove('overflowHidden');
  }

  // ==================================================================

  // MODAL 11 - close modal top.
  var bigX11 = document.getElementById("exit-modal11");

  // When the user clicks the top button, close the modal.
  bigX11.onclick = function() {
    modal11.classList.remove('bg-active');
    document.body.classList.remove('overflowHidden');
  }

  // ==================================================================

  // MODAL 12 - close modal top.
  var bigX12 = document.getElementById("exit-modal12");

  // When the user clicks the top button, close the modal.
  bigX12.onclick = function() {
    modal12.classList.remove('bg-active');
    document.body.classList.remove('overflowHidden');
  }

  // ==================================================================
  // Get the SECOND element that closes the modal (the small 'x').
  // ==================================================================

  // MODAL 1 - close modal bottom.
  var smallX1 = document.getElementById("bottom-exit-modal1");

  // When the user clicks the bottom button, close the modal.
  smallX1.onclick = function() {
    modal1.classList.remove('bg-active');
    document.body.classList.remove('overflowHidden');
  }

  // ==================================================================

  // MODAL 2 - close modal bottom.
  var smallX2 = document.getElementById("bottom-exit-modal2");

  // When the user clicks the bottom button, close the modal.
  smallX2.onclick = function() {
    modal2.classList.remove('bg-active');
    document.body.classList.remove('overflowHidden');
  }

  // ==================================================================

  // MODAL 3 - close modal bottom.
  var smallX3 = document.getElementById("bottom-exit-modal3");

  // When the user clicks the bottom button, close the modal.
  smallX3.onclick = function() {
    modal3.classList.remove('bg-active');
    document.body.classList.remove('overflowHidden');
  }

  // ==================================================================

  // MODAL 4 - close modal bottom.
  var smallX4 = document.getElementById("bottom-exit-modal4");

  // When the user clicks the bottom button, close the modal.
  smallX4.onclick = function() {
    modal4.classList.remove('bg-active');
    document.body.classList.remove('overflowHidden');
  }

  // ==================================================================

  // MODAL 5 - close modal bottom.
  var smallX5 = document.getElementById("bottom-exit-modal5");

  // When the user clicks the bottom button, close the modal.
  smallX5.onclick = function() {
    modal5.classList.remove('bg-active');
    document.body.classList.remove('overflowHidden');
  }

  // ==================================================================

  // MODAL 6 - close modal bottom.
  var smallX6 = document.getElementById("bottom-exit-modal6");

  // When the user clicks the bottom button, close the modal.
  smallX6.onclick = function() {
    modal6.classList.remove('bg-active');
    document.body.classList.remove('overflowHidden');
  }

  // ==================================================================

  // MODAL 7 - close modal bottom.
  var smallX7 = document.getElementById("bottom-exit-modal7");

  // When the user clicks the bottom button, close the modal.
  smallX7.onclick = function() {
    modal7.classList.remove('bg-active');
    document.body.classList.remove('overflowHidden');
  }

  // ==================================================================

  // MODAL 8 - close modal bottom.
  var smallX8 = document.getElementById("bottom-exit-modal8");

  // When the user clicks the bottom button, close the modal.
  smallX8.onclick = function() {
    modal8.classList.remove('bg-active');
    document.body.classList.remove('overflowHidden');
  }

  // ==================================================================

  // MODAL 9 - close modal bottom.
  var smallX9 = document.getElementById("bottom-exit-modal9");

  // When the user clicks the bottom button, close the modal.
  smallX9.onclick = function() {
    modal9.classList.remove('bg-active');
    document.body.classList.remove('overflowHidden');
  }

  // ==================================================================

  // MODAL 10 - close modal bottom.
  var smallX10 = document.getElementById("bottom-exit-modal10");

  // When the user clicks the bottom button, close the modal.
  smallX10.onclick = function() {
    modal10.classList.remove('bg-active');
    document.body.classList.remove('overflowHidden');
  }

  // ==================================================================

  // MODAL 11 - close modal bottom.
  var smallX11 = document.getElementById("bottom-exit-modal11");

  // When the user clicks the bottom button, close the modal.
  smallX11.onclick = function() {
    modal11.classList.remove('bg-active');
    document.body.classList.remove('overflowHidden');
  }

  // ==================================================================

  // MODAL 12 - close modal bottom.
  var smallX12 = document.getElementById("bottom-exit-modal12");

  // When the user clicks the bottom button, close the modal.
  smallX12.onclick = function() {
    modal12.classList.remove('bg-active');
    document.body.classList.remove('overflowHidden');
  }
}
