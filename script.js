function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const validateEmail = (email) => {
        return email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    const emailInput = document.querySelector('input[type="email"]');
    const email = emailInput.value;

    // Remove any existing validation message
    const existingMessage = document.querySelector('.validation-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    // Create a new element for the validation message
    const validationMessage = document.createElement('p');
    validationMessage.classList.add('validation-message');

    if (validateEmail(email)) {
        emailInput.style.borderColor = 'green';
        validationMessage.textContent = 'The email is valid.';
        validationMessage.style.color = 'green';
    } else {
        emailInput.style.borderColor = 'red';
        validationMessage.textContent = 'Please provide a valid email.';
        validationMessage.style.color = 'red';
    }

    // Insert the validation message immediately after the email input field
    emailInput.insertAdjacentElement('afterend', validationMessage);
}

// Attach the submit event listener to the form
document.querySelector('form').addEventListener('submit', submitForm);

// Optional: You can also validate in real-time as the user types
document.querySelector('input[type="email"]').addEventListener('input', () => {
    const emailInput = document.querySelector('input[type="email"]');
    const email = emailInput.value;

    // Remove any existing validation message
    const existingMessage = document.querySelector('.validation-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    // Create a new element for the validation message
    const validationMessage = document.createElement('p');
    validationMessage.classList.add('validation-message');

    if (validateEmail(email)) {
        emailInput.style.borderColor = 'green';
        validationMessage.textContent = 'The email is valid.';
        validationMessage.style.color = 'green';
    } else {
        emailInput.style.borderColor = 'red';
        validationMessage.textContent = 'Please provide a valid email.';
        validationMessage.style.color = 'red';
    }

    // Insert the validation message immediately after the email input field
    emailInput.insertAdjacentElement('afterend', validationMessage);
});