document.addEventListener("DOMContentLoaded", function() {
    var tocLinks = document.querySelectorAll('.toc-link');
    var sidebarLinks = document.querySelectorAll('.sidebar-link');
    var sections = document.querySelectorAll('.content-section');

    // Smooth scrolling for TOC and Sidebar links
    function smoothScroll(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }

    tocLinks.forEach(smoothScroll);
    sidebarLinks.forEach(smoothScroll);

    // Highlight active section in sidebar and TOC
    function updateActiveLink() {
        var scrollPosition = window.scrollY + 150; // Adjust scroll position for active link
        sections.forEach(function(section, index) {
            var bounding = section.getBoundingClientRect();
            if (bounding.top + window.scrollY <= scrollPosition && bounding.bottom + window.scrollY >= scrollPosition) {
                sidebarLinks.forEach(function(link) {
                    link.classList.remove('active');
                });
                tocLinks.forEach(function(link) {
                    link.classList.remove('active');
                });
                if (sidebarLinks[index]) {
                    sidebarLinks[index].classList.add('active');
                }
                if (tocLinks[index]) {
                    tocLinks[index].classList.add('active');
                }
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink(); // Initial call to set the correct active link on page load
});
