/* 
 * The JavaScript file contains functions for
 * the contact.html page of the website. The
 * functions in this file help the user of the
 * website send an email to the owner of the 
 * site through the message button that is
 * unique to the "contact" page of the site. 
 * The functions are not executed until the
 * other DOM content of the website is loaded.
 * 
 * NOTE: All of the window click events and
 * functions are located in the windows.js 
 * file!
 * 
 * Author: Andrew Krause
 * Date: 01/31/2022
 * 
 */

// Wait to load the JavaScript until all of the HTML content is loaded (DON'T NEED THIS???).
// document.addEventListener("DOMContentLoaded", loadContent); // --> COMMENT OUT FOR NOW!!!

// --> SECTION: Add the functions for the email feature on the contact page.

// Wait to load the JavaScript until all of the HTML content is loaded.
document.addEventListener("DOMContentLoaded", loadContent);

// Add the email functionality to the page.
function loadContent(event) {

    // Add DOM objects and functionality 
    // using the following function.
    addMessageModalFunctionsContactPage();
}

/*
 * The function adds the needed functions
 * to the message modal when the message
 * icon unique to the "contact" page of
 * the website is clicked to open it.
 */
function addMessageModalFunctionsContactPage() {

    // Add functionality for opening the message modal.
    var messageAnchorContactPage = document.getElementById("contact-message-item");

    // When the user clicks the button unique to the 
    // contact page of the website, open the modal.
    messageAnchorContactPage.onclick = function() {
        messageModal.classList.add('message-bg-active');
        messageModal.scrollTo(0, 0);
        document.body.classList.add('overflowHidden');
    }
}
