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

        // Calculate the midpoint of the viewport
        const viewportMidpoint = window.innerHeight / 2;

        for (let i = 0; i < sections.length; i++) {
            const bounding = sections[i].getBoundingClientRect();
            // Check if the midpoint of the viewport is within the section's vertical space
            if (bounding.top < viewportMidpoint && bounding.bottom > viewportMidpoint) {
                index = i;
                break;
            }
        }

        // If the current index is -1, that means no section was found within the viewport
        if (index === -1) return;

        // Remove active class from all links
        tocLinks.forEach(link => link.classList.remove('active'));

        // Add active class to the link corresponding to the current section
        if (tocLinks[index]) {
            tocLinks[index].classList.add('active');
        }
    }

    // Highlight section on scroll
    window.addEventListener('scroll', highlightActiveSection);

    // Highlight section on page load
    highlightActiveSection();
});
