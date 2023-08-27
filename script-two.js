
function navigateToPage(pageNumber) {
    const pages = document.querySelectorAll('.page');
    pages.forEach((page, index) => {
        if (index === pageNumber - 1) {
            page.style.transform = 'translateX(0)';
        } else {
            page.style.transform = 'translateX(100%)';
        }
    });
}

