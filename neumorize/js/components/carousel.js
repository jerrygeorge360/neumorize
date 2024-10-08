const imagesData = [
    { src: 'image1.jpg', alt: 'Image 1' },
    { src: 'image2.jpg', alt: 'Image 2' },
    { src: 'image3.jpg', alt: 'Image 3' },
    // Add more images as needed
];

const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

// Function to initialize the carousel
function initializeCarousel() {
    imagesData.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = image.alt;
        imgElement.className = 'carousel-image'; // Add class for styling
        carousel.appendChild(imgElement); // Append image to the carousel
    });

    updateCarousel(); // Display the first image
}

// Function to update the carousel display
function updateCarousel() {
    const images = document.querySelectorAll('.carousel-image');
    images.forEach((img, index) => {
        img.classList.remove('active'); // Remove active class from all images
        if (index === currentIndex) {
            img.classList.add('active'); // Add active class to the current image
        }
    });
}

// Event listener for previous button
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : imagesData.length - 1; // Go to the previous image
    updateCarousel();
});

// Event listener for next button
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < imagesData.length - 1) ? currentIndex + 1 : 0; // Go to the next image
    updateCarousel();
});

// Initialize the carousel on page load
initializeCarousel();
