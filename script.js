document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Simple validation
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
    } else {
        alert("Thank you for your message, " + name + "!");
        // Optionally, reset the form
        document.getElementById("contact-form").reset();
    }
});
