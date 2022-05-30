/*  
 * The JavaScript file is utilized by ALL pages
 * of the website. The file provides a simple
 * function for closing any modal that is open
 * on the website in the event that the window 
 * area outside of a given modal is clicked.
 *
 * Author: Andrew Krause
 * Date: 01/31/2022
 * 
 */

// Wait to load the JavaScript until all of the HTML content is loaded (DON'T NEED THIS???).
// document.addEventListener("DOMContentLoaded", loadContent); // --> COMMENT OUT FOR NOW!!!

// --> SECTION: Add the functions for the email feature.

// Wait to load the JavaScript until all of the HTML content is loaded.
document.addEventListener("DOMContentLoaded", loadContent);

// Add the window click functionality to the pages.
function loadContent(event) {

    // Add DOM objects and functionality 
    // using the following function. This
    // function is made for window click
    // events for the different modals on
    // the website.
    addWindowClearFunctions();
}

/*
 * The function adds the behavior that closes
 * any given modal that is open on the website
 * when the window area outside of the modal 
 * is clicked.
 */
function addWindowClearFunctions() {

    // Select the identifers of the message modal and the 
    // confirmation modal in order to remove the features
    // that are causing them to show if needed,
    var messageModal = document.getElementById("messageModal");
    var confirmModal = document.getElementById("confirmModal");

    // Select all of the project modals on the website in
    // order to remove the features that are causing them 
    // to show if needed.
    // var modal1 = document.getElementById("portfolioModal1");
    var modal2 = document.getElementById("portfolioModal2");
    var modal3 = document.getElementById("portfolioModal3");
    var modal4 = document.getElementById("portfolioModal4");
    var modal5 = document.getElementById("portfolioModal5");
    var modal6 = document.getElementById("portfolioModal6");
    var modal7 = document.getElementById("portfolioModal7");
    var modal8 = document.getElementById("portfolioModal8");
    var modal9 = document.getElementById("portfolioModal9");
    var modal10 = document.getElementById("portfolioModal10");

    // ==================================================================
    // When the user clicks anywhere outside of a given modal, close it.
    // ==================================================================

    // Use the window.onclick function as a universal function
    // to close any given modal that is open on the website
    // when any area outside of the given modal is clicked.
    window.onclick = function(event) {

        // If the message modal exists on the page and
        // is currently open, then close it.
        if(messageModal && event.target == messageModal) {

            // Close the message modal by removing the class.
            messageModal.classList.remove('message-bg-active');

        // If the confirmation modal exists on the
        // page and is currently open, then close it.
        } else if(confirmModal && event.target == confirmModal) {

            // Close the confirm modal by removing the class.
            confirmModal.classList.remove('confirm-bg-active');

        // // If modal1 exists on the page and
        // // is currently open, then close it.
        // } else if(modal1 && event.target == modal1) {

        //     // Close modal1 by removing the class.
        //     modal1.classList.remove('bg-active');

        // If modal2 exists on the page and
        // is currently open, then close it.
        } else if(modal2 && event.target == modal2) {

            // Close modal2 by removing the class.
            modal2.classList.remove('bg-active');

        // If modal3 exists on the page and
        // is currently open, then close it.
        } else if(modal3 && event.target == modal3) {

            // Close modal3 by removing the class.
            modal3.classList.remove('bg-active');

        // If modal4 exists on the page and
        // is currently open, then close it.
        } else if(modal4 && event.target == modal4) {

            // Close modal4 by removing the class.
            modal4.classList.remove('bg-active');

        // If modal5 exists on the page and
        // is currently open, then close it.
        } else if(modal5 && event.target == modal5) {

            // Close modal5 by removing the class.
            modal5.classList.remove('bg-active');

        // If modal6 exists on the page and
        // is currently open, then close it.
        } else if(modal6 && event.target == modal6) {

            // Close modal6 by removing the class.
            modal6.classList.remove('bg-active');

        // If modal7 exists on the page and
        // is currently open, then close it.
        } else if(modal7 && event.target == modal7) {

            // Close modal7 by removing the class.
            modal7.classList.remove('bg-active');

        // If modal8 exists on the page and
        // is currently open, then close it.
        } else if(modal8 && event.target == modal8) {

            // Close modal8 by removing the class.
            modal8.classList.remove('bg-active');

        // If modal9 exists on the page and
        // is currently open, then close it.
        } else if(modal9 && event.target == modal9) {

            // Close modal9 by removing the class.
            modal9.classList.remove('bg-active');

        // If modal10 exists on the page and
        // is currently open, then close it.
        } else if(modal10 && event.target == modal10) {

            // Close modal10 by removing the class.
            modal10.classList.remove('bg-active');
        }

        // Remove the class that prevents the page
        // from scrolling when a modal is open.
        document.body.classList.remove('overflowHidden');
    }
}
