class BreadCrumbs {
    constructor() {
        this.stack = this.loadFromLocalStorage(); // Load breadcrumbs from localStorage
        this.renderBreadcrumbs(); // Initial rendering of breadcrumbs
    }

    // Load the breadcrumb stack from localStorage
    loadFromLocalStorage() {
        const savedStack = localStorage.getItem('breadcrumbs');
        return savedStack ? JSON.parse(savedStack) : [];
    }

    // Returns the entire stack
    get() {
        return this.stack;
    }

    // Appends a new breadcrumb (page) to the stack
    append(name) {
        this.stack.push(name);
        this.updateHistoryState();
        this.saveToLocalStorage(); // Save to localStorage
        this.renderBreadcrumbs();
        this.navigateToPage(name); // Navigate to the new page
    }

    // Splices (removes) breadcrumbs after a certain page
    splice(element) {
        const index = this.stack.indexOf(element);
        if (index !== -1) {
            this.stack.splice(index + 1);  // Remove all elements after the clicked breadcrumb
            this.updateHistoryState();
            this.saveToLocalStorage(); // Save to localStorage
            this.renderBreadcrumbs();
            this.navigateToPage(element);  // Navigate to the clicked breadcrumb's page
        }
    }

    // Update the browser history state with the current breadcrumb stack
    updateHistoryState() {
        history.pushState({ breadcrumbs: this.stack }, '', ''); // Push the current stack to history
    }

    // Save the current breadcrumb stack to localStorage
    saveToLocalStorage() {
        localStorage.setItem('breadcrumbs', JSON.stringify(this.stack));
    }

    // Handle popstate events when user navigates using back/forward browser buttons
    handlePopState(event) {
        if (event.state && event.state.breadcrumbs) {
            this.stack = event.state.breadcrumbs;
            this.renderBreadcrumbs();  // Re-render the breadcrumbs in the UI
            this.navigateToPage(this.stack[this.stack.length - 1]);  // Navigate to the last breadcrumb's page
        } else {
            // If no state found, load from localStorage
            this.stack = this.loadFromLocalStorage();
            this.renderBreadcrumbs();  // Re-render the breadcrumbs in the UI
            if (this.stack.length > 0) {
                this.navigateToPage(this.stack[this.stack.length - 1]);  // Navigate to the last breadcrumb's page
            }
        }
    }

    // Render breadcrumbs in the UI
    renderBreadcrumbs() {
        const breadcrumbList = document.getElementById('breadcrumbs');
        breadcrumbList.innerHTML = '';  // Clear current breadcrumbs

        this.stack.forEach((crumb) => {
            const li = document.createElement('li');
            li.textContent = crumb;
            li.onclick = () => this.splice(crumb);  // Handle clicking on a breadcrumb
            breadcrumbList.appendChild(li);
        });
    }

    // Navigate to a specific page based on the breadcrumb name
    navigateToPage(pageName) {
        console.log(`Navigating to: ${pageName}`);
        // Implement your logic to load or display the page corresponding to the breadcrumb
        // This could be an AJAX call, dynamic content loading, or a full page navigation
        document.body.innerHTML = `<h1>${pageName} Page</h1>` + document.body.innerHTML; // Example: Update content
    }
}

// Initialize breadcrumbs instance
const breadCrumbs = new BreadCrumbs();

// Handle browser navigation events
window.addEventListener('popstate', (event) => {
    breadCrumbs.handlePopState(event);
});

// Navigate to a specific page
function navigateTo(page) {
    breadCrumbs.append(page);
}

// Initialize with 'Home' if no breadcrumbs exist
if (breadCrumbs.get().length === 0) {
    breadCrumbs.append('Home');
}