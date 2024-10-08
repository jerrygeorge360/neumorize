class Footer {
    constructor(contentSelector, items, socialLinks) {
        this.footerContent = document.querySelector(contentSelector);
        this.footerItemsData = items;
        this.socialMediaLinks = socialLinks;

        this.initializeFooter();
    }

    // Function to initialize the footer
    initializeFooter() {
        this.footerItemsData.forEach(item => {
            const div = document.createElement('div');
            div.className = 'footer-item';
            const anchor = document.createElement('a');
            anchor.href = item.link; // Set link
            anchor.textContent = item.text; // Set text
            anchor.target = '_blank'; // Open in a new tab
            div.appendChild(anchor); // Append anchor to footer item
            this.footerContent.appendChild(div); // Append footer item to footer content
        });

        // Add social media icons
        this.addSocialMediaIcons();
    }

    // Function to add social media icons
    addSocialMediaIcons() {
        const socialMediaContainer = document.createElement('div');
        socialMediaContainer.className = 'social-media-icons';

        this.socialMediaLinks.forEach(media => {
            const anchor = document.createElement('a');
            anchor.href = media.link; // Set link
            anchor.title = media.title; // Set title
            anchor.className = 'icon';
            anchor.innerHTML = media.icon; // Use icon character
            anchor.target = '_blank'; // Open in a new tab
            socialMediaContainer.appendChild(anchor); // Append to social media container
        });

        this.footerContent.appendChild(socialMediaContainer); // Append social media container to footer
    }
}

// Usage Example
const footerItemsData = [
    { text: 'About Us', link: '#about' },
    { text: 'Contact', link: '#contact' },
    { text: 'Privacy Policy', link: '#privacy' },
    { text: 'Terms of Service', link: '#terms' },
];

const socialMediaLinks = [
    { icon: '👍', link: 'https://www.facebook.com', title: 'Facebook' },
    { icon: '🐦', link: 'https://www.twitter.com', title: 'Twitter' },
    { icon: '📸', link: 'https://www.instagram.com', title: 'Instagram' },
];

// Instantiate the Footer class
// const myFooter = new Footer('.footer-content', footerItemsData, socialMediaLinks);
