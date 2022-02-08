/*  
 * The JavaScript file implements simple functions 
 * on the portfolio website such as animating the
 * links in the navigation bar. The JS also provides
 * the functionality needed to implement the modals
 * present on the website. The majority of the 
 * JavaScript in this file is used for the features
 * of each modal. 
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
  addProjects();
  addModalFunctions();

  // Add an event listener for sending an email.
  //  document.getElementById("contact-send").addEventListener("click", sendEmail);
}

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




// --> SECTION: Add skills list to the DOM.
// DO THIS LATER!!!





// --> SECTION: Add the project cards to the DOM.

// List of project objects.
// CAN ALWAYS ADD NEW OBJECTS HERE.
let myProjects = [ 
  {
    "project-id": "portfolio-item1",
    "project-ref": "#portfolioModal1",
    "project-image": "images/parkfinder.png",
    "project-image-alt": "parkfinder-img",
    "project-name": "Park Finder",
    "project-brief": "Web application written using Django.",
  },
  {
    "project-id": "portfolio-item2",
    "project-ref": "#portfolioModal2",
    "project-image": "images/teamaptiv.png",
    "project-image-alt": "teamaptiv-img",
    "project-name": "Team Aptiv",
    "project-brief": "Web application written using Node.js.",
  },
  {
    "project-id": "portfolio-item3",
    "project-ref": "#portfolioModal3",
    "project-image": "images/apppromotion.png",
    "project-image-alt": "apppromotion-img",
    "project-name": "Promotional Webpage",
    "project-brief": "Webpage made to promote fictional app.",
  },
  {
    "project-id": "portfolio-item4",
    "project-ref": "#portfolioModal4",
    "project-image": "images/firstpersonal.png",
    "project-image-alt": "personalwebpage-img",
    "project-name": "First Personal Webpage",
    "project-brief": "First simple website made with HTML/CSS.",
  },
  {
    "project-id": "portfolio-item5",
    "project-ref": "#portfolioModal5",
    "project-image": "images/officesimulation.png",
    "project-image-alt": "officesimulation-img",
    "project-name": "Office Hours Simulation",
    "project-brief": "Simple program to simulate office hours.",
  },
  {
    "project-id": "portfolio-item6",
    "project-ref": "#portfolioModal6",
    "project-image": "images/hashtable.png",
    "project-image-alt": "hashtable-img",
    "project-name": "Hash Table",
    "project-brief": "Simple data structure written using Java.",
  },
  {
    "project-id": "portfolio-item7",
    "project-ref": "#portfolioModal7",
    "project-image": "images/javapong.png",
    "project-image-alt": "javapong-img",
    "project-name": "Java Pong",
    "project-brief": "Adaptation of the pong game.",
  },
  {
    "project-id": "portfolio-item8",
    "project-ref": "#portfolioModal8",
    "project-image": "images/firstdrawing.png",
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

  // Loop through the list of objects and output
  // the content to the website.
  myProjects.forEach(myProjects => {

    // Create a new anchor tag element for the project.
    let anchorTag = document.createElement("a");
    anchorTag.setAttribute("id", myProjects["project-id"]);
    anchorTag.setAttribute("onClick", "get_ID(this)");
    anchorTag.setAttribute("class", "portfolio-item");
    anchorTag.setAttribute("data-toggle", "modal");
    anchorTag.setAttribute("href", myProjects["project-ref"]);
    projectList.appendChild(anchorTag);

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

// List of project modals.
// CAN ALWAYS ADD NEW MODALS HERE.




















// --> SECTION: Style the modals on the website.

/*
 * The function adds the needed functions
 * to any given modal when it is clicked
 * and opened.
 */
function addModalFunctions() {

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

  var bigX2 = document.getElementById("exit-modal2");

  bigX2.onclick = function() {
    modal2.classList.remove('bg-active');
    document.body.classList.remove('overflowHidden');
  }

  var bigX3 = document.getElementById("exit-modal3");

  bigX3.onclick = function() {
    modal3.classList.remove('bg-active');
    document.body.classList.remove('overflowHidden');
  }

  var bigX4 = document.getElementById("exit-modal4");

  bigX4.onclick = function() {
    modal4.classList.remove('bg-active');
    document.body.classList.remove('overflowHidden');
  }

  var bigX5 = document.getElementById("exit-modal5");

  bigX5.onclick = function() {
    modal5.classList.remove('bg-active');
    document.body.classList.remove('overflowHidden');
  }

  var bigX6 = document.getElementById("exit-modal6");

  bigX6.onclick = function() {
    modal6.classList.remove('bg-active');
    document.body.classList.remove('overflowHidden');
  }

  var bigX7 = document.getElementById("exit-modal7");

  bigX7.onclick = function() {
    modal7.classList.remove('bg-active');
    document.body.classList.remove('overflowHidden');
  }

  var bigX8 = document.getElementById("exit-modal8");

  bigX8.onclick = function() {
    modal8.classList.remove('bg-active');
    document.body.classList.remove('overflowHidden');
  }

  // ==================================================================
  // Get the SECOND element that closes the modal (the small 'x').
  // ==================================================================

  var smallX1 = document.getElementById("bottom-exit-modal1");

  smallX1.onclick = function() {
    modal1.classList.remove('bg-active');
    document.body.classList.remove('overflowHidden');
  }

  var smallX2 = document.getElementById("bottom-exit-modal2");

  smallX2.onclick = function() {
    modal2.classList.remove('bg-active');
    document.body.classList.remove('overflowHidden');
  }

  var smallX3 = document.getElementById("bottom-exit-modal3");

  smallX3.onclick = function() {
    modal3.classList.remove('bg-active');
    document.body.classList.remove('overflowHidden');
  }

  var smallX4 = document.getElementById("bottom-exit-modal4");

  smallX4.onclick = function() {
    modal4.classList.remove('bg-active');
    document.body.classList.remove('overflowHidden');
  }

  var smallX5 = document.getElementById("bottom-exit-modal5");

  smallX5.onclick = function() {
    modal5.classList.remove('bg-active');
    document.body.classList.remove('overflowHidden');
  }

  var smallX6 = document.getElementById("bottom-exit-modal6");

  smallX6.onclick = function() {
    modal6.classList.remove('bg-active');
    document.body.classList.remove('overflowHidden');
  }

  var smallX7 = document.getElementById("bottom-exit-modal7");

  smallX7.onclick = function() {
    modal7.classList.remove('bg-active');
    document.body.classList.remove('overflowHidden');
  }

  var smallX8 = document.getElementById("bottom-exit-modal8");

  smallX8.onclick = function() {
    modal8.classList.remove('bg-active');
    document.body.classList.remove('overflowHidden');
  }

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
}
