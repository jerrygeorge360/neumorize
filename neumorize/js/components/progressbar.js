const progressBar = document.getElementById('progress-bar');
const increaseButton = document.getElementById('increase-progress');

let progress = 0; // Initial progress value

// Function to increase progress
function increaseProgress() {
    if (progress < 100) {
        progress += 10; // Increase by 10%
        progressBar.style.width = progress + '%'; // Update progress bar width
    } else {
        alert('Progress is already at 100%!');
    }
}

// Add event listener to the button
increaseButton.addEventListener('click', increaseProgress);
