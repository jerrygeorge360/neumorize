const paginationContainer = document.querySelector('.pagination-numbers');
const previousButton = document.querySelector('.pagination-previous');
const nextButton = document.querySelector('.pagination-next');

let currentPage = 1;
const totalPages = 50;
const maxVisiblePages = 7;

function createPagination() {
    paginationContainer.innerHTML = '';

    const fragment = document.createDocumentFragment();
    
    if (totalPages <= maxVisiblePages) {
        for (let i = 1; i <= totalPages; i++) {
            fragment.appendChild(createPageItem(i));
        }
    } else {
        if (currentPage > 3) {
            fragment.appendChild(createPageItem(1));
            if (currentPage > 4) {
                fragment.appendChild(createEllipsis());
            }
        }

        const startPage = Math.max(1, currentPage - 2);
        const endPage = Math.min(totalPages, currentPage + 2);
        
        for (let i = startPage; i <= endPage; i++) {
            fragment.appendChild(createPageItem(i));
        }

        if (currentPage < totalPages - 3) {
            if (currentPage < totalPages - 4) {
                fragment.appendChild(createEllipsis());
            }
            fragment.appendChild(createPageItem(totalPages));
        }
    }

    paginationContainer.appendChild(fragment);
    updateButtonStates();
}

function createPageItem(pageNumber) {
    const pageItem = document.createElement('div');
    pageItem.className = 'pagination-item';
    if (pageNumber === currentPage) {
        pageItem.classList.add('active');
    }
    pageItem.textContent = pageNumber;
    pageItem.addEventListener('click', () => {
        currentPage = pageNumber;
        createPagination();
    });
    return pageItem;
}

function createEllipsis() {
    const ellipsis = document.createElement('div');
    ellipsis.className = 'pagination-item';
    ellipsis.textContent = '...';
    ellipsis.style.cursor = 'default';
    ellipsis.style.pointerEvents = 'none';
    return ellipsis;
}

function updateButtonStates() {
    previousButton.classList.toggle('disabled', currentPage === 1);
    nextButton.classList.toggle('disabled', currentPage === totalPages);
}

previousButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        createPagination();
    }
});

nextButton.addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        createPagination();
    }
});

createPagination();
