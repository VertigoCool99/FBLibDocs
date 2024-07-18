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
        let index = sections.length - 1;

        // Find the section that is currently closest to the viewport
        for (let i = 0; i < sections.length; i++) {
            const bounding = sections[i].getBoundingClientRect();
            if (bounding.top <= window.innerHeight / 2 && bounding.bottom >= window.innerHeight / 2) {
                index = i;
                break;
            }
        }

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
