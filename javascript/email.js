/*  
 * The JavaScript file is utilized by ALL pages
 * of the website given that all pages contain
 * the email option. The file provides simple
 * functions for sending an email to the owner
 * of the portfolio website by using an API
 * called EmailJS.
 * 
 * NOTE: All of the window click events and
 * functions are located in the windows.js 
 * file!
 *
 * Author: Andrew Krause
 * Date: 01/31/2022
 * 
 */

// --> SECTION: Add the functions for the email feature.

// Wait to load the JavaScript until all of the HTML content is loaded.
document.addEventListener("DOMContentLoaded", loadContent);

// Add the email functionality to the page.
function loadContent(event) {

    // Add DOM objects and functionality 
    // using the following function.
    addMessageModalFunctions();

    // Add the event to enable a user to send messages to the
    // owner of the website. The event detects when the user
    // clicks the "Send" button of the message modal.
    document.getElementById("bottom-send-message-modal").addEventListener("click", sendMessage);
}

/*
 * The function adds the appropriate behavior
 * to the message modal when the message icon
 * is clicked to open it.
 */
function addMessageModalFunctions() {

    // Add functionality for opening the message modal.
    var messageAnchor = document.getElementById("message-item");
    var messageModal = document.getElementById("messageModal");

    // When the user clicks the button, open the modal.
    messageAnchor.onclick = function() {
        messageModal.classList.add('message-bg-active');
        messageModal.scrollTo(0, 0);
        document.body.classList.add('overflowHidden');
    }

    // ======================================================

    // Add functionality to close the message modal when
    // the large "X" icon is clicked by a user on the site.
    var bigMessageX = document.getElementById("exit-message-modal");

    // When the user clicks the "X" icon on the modal,
    // remove classes in order to close the modal.
    bigMessageX.onclick = function() {

        // Remove the classes that show the
        // message modal on the website.
        messageModal.classList.remove('message-bg-active');
        document.body.classList.remove('overflowHidden');
    }
}

/*
 * The function adds the needed functions
 * to the confirm modal when a message
 * has been successfully sent by the user.
 */
function addConfirmModalFunctions() {

    // Create a variable to open the confirm modal after
    // the message by the user has been sent on the site.
    var confirmModal = document.getElementById("confirmModal");

    // After the user sends their message, open the 
    // confirm modal.
    confirmModal.classList.add('confirm-bg-active');
    confirmModal.scrollTo(0, 0);
    document.body.classList.add('overflowHidden');

    // ======================================================

    // Add functionality to close the confirm modal when
    // the "Okay" button is clicked by a user on the site.
    var okayButton = document.getElementById("confirm-bottom-exit");

    // When the user clicks the "Okay" button on the
    // modal, remove classes in order to close it.
    okayButton.onclick = function() {

        // Remove the classes that show the
        // confirm modal on the website.
        confirmModal.classList.remove('confirm-bg-active');
        document.body.classList.remove('overflowHidden');
    }
}

/* 
 * This function uses a resource called emailjs to
 * allow emails to be sent directly from an html form.
 */
function sendMessage() {

    // Creat a variable to obtain the different inputs
    // entered by the user to write the message.
    let emailInfo = {
        message_email: document.getElementById("message-email").value,
        message_subject: document.getElementById("message-subject").value,
        message_body: document.getElementById("message-body").value,
    } 

    // Check if the input values are existent before sending the message.
    if (emailInfo.message_email && emailInfo.message_subject && emailInfo.message_body) {

        // Call the send function through EmailJS to
        // send the message to the owner of the website.
        emailjs.send("service_0tripys", "template_8w73g4e", emailInfo)
        .then(response => {

            // Call the function to add the confirm modal
            // after the user has sent a message on the 
            // website.
            addConfirmModalFunctions();
        });

        // Clear the inputs that were entered by the user.
        document.getElementById("message-email").value = "";
        document.getElementById("message-subject").value = "";
        document.getElementById("message-body").value = "";

        // Select the message modal in order to
        // remove some of the styles from it.
        var messageModal = document.getElementById("messageModal");

        // Close the message modal after resetting the input values.
        messageModal.classList.remove('message-bg-active');
        document.body.classList.remove('overflowHidden');
    }
}
