const indicator = document.getElementById('indicator');
const indicatorStatus = document.getElementById('indicator-status');
const toggleButton = document.getElementById('toggle-indicator');
const root = document.documentElement;
const accentColor2 = getComputedStyle(root).getPropertyValue('--accent-color2').trim();
const accentColor1 = getComputedStyle(root).getPropertyValue('--accent-color1').trim();
let isActive = false; // Indicator state

// Function to toggle the indicator
function toggleIndicator() {
    isActive = !isActive; // Toggle the state
    if (isActive) {
        indicator.style.backgroundColor = accentColor2; // Change color to active
        indicatorStatus.textContent = 'Status: Active'; // Update status text
        indicator.style.transform = 'scale(1.2)'; // Scale up for visual effect
    } else {
        indicator.style.backgroundColor = accentColor1; // Change color to inactive
        indicatorStatus.textContent = 'Status: Inactive'; // Update status text
        indicator.style.transform = 'scale(1)'; // Scale back to normal
    }
}

// Add event listener to the button
toggleButton.addEventListener('click', toggleIndicator);
