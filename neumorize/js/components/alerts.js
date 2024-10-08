function showAlert(variant, message, duration = 3000) {
    const alertContainer = document.querySelector(`.button-alert-${variant}`);

    const alertMessage = alertContainer.querySelector('.alert-message p');
    alertMessage.textContent = message;

    alertContainer.classList.add('show');

    setTimeout(() => {
        alertContainer.classList.remove('show');
    }, duration);
}

// Example usage:
// showAlert('success', 'Your action was successful!', 5000); // Shows success alert for 5 seconds
// showAlert('error', 'An error occurred!', 3000); // Shows error alert for 3 seconds
// showAlert('info', 'An info occurred!', 3000); // Shows error alert for 3 seconds
