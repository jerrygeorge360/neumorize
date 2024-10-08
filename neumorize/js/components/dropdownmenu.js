class Dropdown {
    constructor(buttonSelector, contentSelector, items) {
        this.dropdownButton = document.querySelector(buttonSelector);
        this.dropdownContent = document.querySelector(contentSelector);
        this.dropdownItemsData = items;

        this.initializeDropdown();
        this.addEventListeners();
    }

    // Function to initialize the dropdown menu
    initializeDropdown() {
        this.dropdownItemsData.forEach(item => {
            const div = document.createElement('div');
            div.className = 'dropdown-item';
            div.textContent = item.text; // Set item text
            div.addEventListener('click', item.action); // Set action on click
            this.dropdownContent.appendChild(div); // Append item to dropdown
        });
    }

    // Function to toggle dropdown visibility
    toggleDropdown() {
        this.dropdownContent.style.display = this.dropdownContent.style.display === 'block' ? 'none' : 'block';
    }

    // Function to close dropdown when clicking outside of it
    closeDropdown(event) {
        if (!event.target.matches(this.dropdownButton)) {
            this.dropdownContent.style.display = 'none'; // Hide dropdown if clicking outside
        }
    }

    // Function to add event listeners
    addEventListeners() {
        this.dropdownButton.addEventListener('click', () => this.toggleDropdown());
        window.addEventListener('click', (event) => this.closeDropdown(event));
    }
}

// Usage Example:
const dropdownItemsData = [
    { text: 'Item 1', action: () => alert('You clicked Item 1') },
    { text: 'Item 2', action: () => alert('You clicked Item 2') },
    { text: 'Item 3', action: () => alert('You clicked Item 3') },
    // Add more items as needed
];

// Instantiate the Dropdown class
// const myDropdown = new Dropdown('.dropdown-button', '.dropdown-content', dropdownItemsData);
