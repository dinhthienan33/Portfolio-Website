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
    var modal1 = document.getElementById("portfolioModal1");
    var modal2 = document.getElementById("portfolioModal2");
    var modal3 = document.getElementById("portfolioModal3");
    var modal4 = document.getElementById("portfolioModal4");
    var modal5 = document.getElementById("portfolioModal5");
    var modal6 = document.getElementById("portfolioModal6");
    var modal7 = document.getElementById("portfolioModal7");
    var modal8 = document.getElementById("portfolioModal8");
    var modal9 = document.getElementById("portfolioModal9");
    var modal10 = document.getElementById("portfolioModal10");
    var modal11 = document.getElementById("portfolioModal11");
    var modal12 = document.getElementById("portfolioModal12");

    // ==================================================================
    // When the user clicks anywhere outside of a given modal, close it.
    // ==================================================================

    // Use the window.onclick function as a universal function
    // to close any given modal that is open on the website
    // when any area outside of the given modal is clicked.
    window.addEventListener("click", function(event) {

        // If the message modal exists on the page and
        // is currently open, then close it.
        if(messageModal && event.target == messageModal) {

            // Close the message modal by removing the class.
            // Also remove the overflowHidden class to enable
            // page scrolling again.
            messageModal.classList.remove('message-bg-active');
            document.body.classList.remove('overflowHidden');

        // If the confirmation modal exists on the
        // page and is currently open, then close it.
        } else if(confirmModal && event.target == confirmModal) {

            // Close the confirm modal by removing the class.
            // Also remove the overflowHidden class to enable
            // page scrolling again.
            confirmModal.classList.remove('confirm-bg-active');
            document.body.classList.remove('overflowHidden');

        // If modal1 exists on the page and
        // is currently open, then close it.
        } else if(modal1 && event.target == modal1) {

            // Close modal1 by removing the class.
            // Also remove the overflowHidden class
            // to enable page scrolling again.
            modal1.classList.remove('bg-active');
            document.body.classList.remove('overflowHidden');

        // If modal2 exists on the page and
        // is currently open, then close it.
        } else if(modal2 && event.target == modal2) {

            // Close modal2 by removing the class.
            // Also remove the overflowHidden class
            // to enable page scrolling again.
            modal2.classList.remove('bg-active');
            document.body.classList.remove('overflowHidden');

        // If modal3 exists on the page and
        // is currently open, then close it.
        } else if(modal3 && event.target == modal3) {

            // Close modal3 by removing the class.
            // Also remove the overflowHidden class
            // to enable page scrolling again.
            modal3.classList.remove('bg-active');
            document.body.classList.remove('overflowHidden');

        // If modal4 exists on the page and
        // is currently open, then close it.
        } else if(modal4 && event.target == modal4) {

            // Close modal4 by removing the class.
            // Also remove the overflowHidden class
            // to enable page scrolling again.
            modal4.classList.remove('bg-active');
            document.body.classList.remove('overflowHidden');

        // If modal5 exists on the page and
        // is currently open, then close it.
        } else if(modal5 && event.target == modal5) {

            // Close modal5 by removing the class.
            // Also remove the overflowHidden class
            // to enable page scrolling again.
            modal5.classList.remove('bg-active');
            document.body.classList.remove('overflowHidden');

        // If modal6 exists on the page and
        // is currently open, then close it.
        } else if(modal6 && event.target == modal6) {

            // Close modal6 by removing the class.
            // Also remove the overflowHidden class
            // to enable page scrolling again.
            modal6.classList.remove('bg-active');
            document.body.classList.remove('overflowHidden');

        // If modal7 exists on the page and
        // is currently open, then close it.
        } else if(modal7 && event.target == modal7) {

            // Close modal7 by removing the class.
            // Also remove the overflowHidden class
            // to enable page scrolling again.
            modal7.classList.remove('bg-active');
            document.body.classList.remove('overflowHidden');

        // If modal8 exists on the page and
        // is currently open, then close it.
        } else if(modal8 && event.target == modal8) {

            // Close modal8 by removing the class.
            // Also remove the overflowHidden class
            // to enable page scrolling again.
            modal8.classList.remove('bg-active');
            document.body.classList.remove('overflowHidden');

        // If modal9 exists on the page and
        // is currently open, then close it.
        } else if(modal9 && event.target == modal9) {

            // Close modal9 by removing the class.
            // Also remove the overflowHidden class
            // to enable page scrolling again.
            modal9.classList.remove('bg-active');
            document.body.classList.remove('overflowHidden');

        // If modal10 exists on the page and
        // is currently open, then close it.
        } else if(modal10 && event.target == modal10) {

            // Close modal10 by removing the class.
            // Also remove the overflowHidden class
            // to enable page scrolling again.
            modal10.classList.remove('bg-active');
            document.body.classList.remove('overflowHidden');
        
        // If modal11 exists on the page and
        // is currently open, then close it.
        } else if(modal11 && event.target == modal11) {

            // Close modal11 by removing the class.
            // Also remove the overflowHidden class
            // to enable page scrolling again.
            modal11.classList.remove('bg-active');
            document.body.classList.remove('overflowHidden');

        // If modal12 exists on the page and
        // is currently open, then close it.
        } else if(modal12 && event.target == modal12) {

            // Close modal12 by removing the class.
            // Also remove the overflowHidden class
            // to enable page scrolling again.
            modal12.classList.remove('bg-active');
            document.body.classList.remove('overflowHidden');
        }
    });
}

/*
 * The function adds the behavior that causes
 * the navigational bar with the links to stick
 * to the top of the page after the user has
 * scrolled a certain distance. This ONLY occurs
 * on smaller device sizes like mobile devices.
 */
$(window).scroll(function(){

    // If the user has scrolled 40 pixels from the
    // top of the page, add the classes to certain
    // elements to fix a part of the navigational
    // bar to the top of the screen. This action 
    // only occurs when the screen width is smaller
    // (like on a mobile device).
    if ($(window).scrollTop() >= 47) {
        $('.menu').addClass('fixed-mobile-header');
        $('#about').addClass('fixed-padding');
        $('#resume').addClass('fixed-padding');
        $('#projects').addClass('fixed-padding');
        $('#contact').addClass('fixed-padding');
        $('#notfound').addClass('fixed-padding');

    // Otherwise, remove the classes that were added
    // to fix a part of the navigational bar on top
    // of the screen (if they exist). This action 
    // only occurs when the screen width is smaller
    // (like on a mobile device).
    } else {
        $('.menu').removeClass('fixed-mobile-header');
        $('#about').removeClass('fixed-padding');
        $('#resume').removeClass('fixed-padding');
        $('#projects').removeClass('fixed-padding');
        $('#contact').removeClass('fixed-padding');
        $('#notfound').removeClass('fixed-padding');
    }
});
