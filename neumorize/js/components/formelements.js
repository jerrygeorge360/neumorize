const form = document.querySelector('.form-container');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message').value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const terms = document.getElementById('terms').checked;

    // Validation (add any custom validation logic here)
    if (!name || !email || !password || !message || !gender || !terms) {
        alert('Please fill in all fields and agree to the terms.');
        return;
    }

    // Form submission logic
    console.log('Form Submitted:', { name, email, password, message, gender, terms });
    alert('Form Submitted Successfully!');
    
    // Reset the form
    form.reset();
});
