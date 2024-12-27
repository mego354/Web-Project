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

document.getElementById("phone").addEventListener("input", function () {
    const phoneField = this;
    const phoneRegex = /^[0-9]{10}$/;
    const errorMessage = phoneField.nextElementSibling;

    if (!phoneRegex.test(phoneField.value.trim())) {
        errorMessage.textContent = "Please enter a valid 10-digit phone number.";
    } else {
        errorMessage.textContent = "";
    }
});

document.getElementById("booking-form").addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const destination = document.getElementById("destination");
    const travelMethod = document.getElementById("travel-method");
    const paymentMethod = document.getElementById("payment-method");
    const travelDate = document.getElementById("travel-date");
    const numPeople = document.getElementById("num-people");
    const tripType = document.querySelector('input[name="trip-type"]:checked');

    if (name.value.trim() === "") {
        isValid = false;
        name.nextElementSibling.textContent = "Name is required.";
    }

    if (email.value.trim() === "") {
        isValid = false;
        email.nextElementSibling.textContent = "Email is required.";
    }

    if (phone.value.trim() === "") {
        isValid = false;
        phone.nextElementSibling.textContent = "Phone number is required.";
    }

    if (destination.value === "") {
        isValid = false;
        destination.nextElementSibling.textContent = "Please select a destination.";
    }

    if (travelMethod.value === "") {
        isValid = false;
        travelMethod.nextElementSibling.textContent = "Please select a travel method.";
    }

    if (paymentMethod.value === "") {
        isValid = false;
        paymentMethod.nextElementSibling.textContent = "Please select a payment method.";
    }

    if (travelDate.value === "") {
        isValid = false;
        travelDate.nextElementSibling.textContent = "Travel date is required.";
    }

    if (numPeople.value.trim() === "") {
        isValid = false;
        numPeople.nextElementSibling.textContent = "Number of people is required.";
    }

    if (!tripType) {
        isValid = false;
        document.getElementById("trip-type-error").textContent = "Please select a trip type.";
    }

    if (isValid) {
        alert("Form submitted successfully!");
        this.submit();
    }
});
