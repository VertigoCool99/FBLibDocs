document.addEventListener("DOMContentLoaded", function() {
    function highlightActiveLink() {
        var sidebarLinks = document.querySelectorAll('.sidebar-link');
        var currentPath = window.location.pathname.split('/').pop(); // Get the current file name

        sidebarLinks.forEach(function(link) {
            var href = link.getAttribute('href');
            var isActive = href === currentPath || (currentPath === 'index.html' && href === 'index.html');

            link.classList.toggle('active', isActive);
        });
    }

    highlightActiveLink(); // Initial call to set the correct active link on page load
});

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.content-section');
    const tocLinks = document.querySelectorAll('.toc a');

    function highlightActiveSection() {
        let index = -1;

        // Find the section that is currently closest to the viewport
        for (let i = 0; i < sections.length; i++) {
            const bounding = sections[i].getBoundingClientRect();
            const midpoint = bounding.top + (bounding.height / 2);

            if (midpoint <= window.innerHeight / 2 && midpoint >= -window.innerHeight / 2) {
                index = i;
                break;
            }
        }

        // Remove active class from all links
        tocLinks.forEach(link => link.classList.remove('active'));

        // Add active class to the link corresponding to the current section
        if (index >= 0 && tocLinks[index]) {
            tocLinks[index].classList.add('active');
        }
    }

    // Debounce function to limit the rate of scroll event handling
    function debounce(func, wait) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }

    // Highlight section on scroll with debounce
    window.addEventListener('scroll', debounce(highlightActiveSection, 10));

    // Highlight section on page load
    highlightActiveSection();
});
