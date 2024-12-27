document.getElementById("name").addEventListener("input", function () {
    const nameField = this;
    const nameRegex = /^[a-zA-Z\s]+$/;
    const errorMessage = nameField.nextElementSibling;

    if (!nameRegex.test(nameField.value.trim())) {
        errorMessage.textContent = "The name should only contain letters.";
    } else {
        errorMessage.textContent = "";
    }
});

document.getElementById("email").addEventListener("input", function () {
    const emailField = this;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const errorMessage = emailField.nextElementSibling;

    if (!emailRegex.test(emailField.value.trim())) {
        errorMessage.textContent = "Please enter a valid email.";
    } else {
        errorMessage.textContent = "";
    }
});

document.getElementById("comments").addEventListener("input", function () {
    const commentsField = this;
    const errorMessage = commentsField.nextElementSibling;

    if (commentsField.value.trim() === "") {
        errorMessage.textContent = "Comments cannot be empty.";
    } else {
        errorMessage.textContent = "";
    }
});

document.getElementById("booking-form").addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const comments = document.getElementById("comments");

    // Validate Name
    if (name.value.trim() === "" || name.nextElementSibling.textContent !== "") {
        isValid = false;
        name.nextElementSibling.textContent = "Please enter a valid name.";
    }

    // Validate Email
    if (email.value.trim() === "" || email.nextElementSibling.textContent !== "") {
        isValid = false;
        email.nextElementSibling.textContent = "Please enter a valid email.";
    }

    // Validate Comments
    if (comments.value.trim() === "") {
        isValid = false;
        comments.nextElementSibling.textContent = "Please enter a comment.";
    }

    if (isValid) {
        alert("Form submitted successfully!");
        this.submit();
    }
});
