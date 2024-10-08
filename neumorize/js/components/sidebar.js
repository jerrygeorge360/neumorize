const sidebar = document.querySelector('.sidebar-container');
const overlay = document.querySelector('.sidebar-overlay');

function toggleSidebar() {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

overlay.addEventListener('click', toggleSidebar);

