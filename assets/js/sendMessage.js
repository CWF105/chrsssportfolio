emailjs.init({publicKey: "mCkzNFxHkk1MBh1q0",});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Set up the email parameters
    const emailParams = {
        from_name: name,
        from_email: email,
        message: message
    };
    // service_dzobvw4
    
    // Send the email using EmailJS
    emailjs.send("service_dzobvw4", "template_b1de3bq", emailParams)
        .then(function(response) {
            document.getElementById("response-message").textContent = "Message sent successfully!";
            document.getElementById("contact-form").reset(); // Clear form after submission
        })
        .catch(function(error) {
            document.getElementById("response-message").textContent = "Error sending message. Please try again.";
            console.log("Error:", error);
        });
});