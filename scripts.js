document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for links
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

    var tocLinks = document.querySelectorAll('.toc-link');
    var sidebarLinks = document.querySelectorAll('.sidebar-link');
    var sections = document.querySelectorAll('.content-section');

    tocLinks.forEach(smoothScroll);
    sidebarLinks.forEach(smoothScroll);

    // Highlight active section in sidebar and TOC
    function updateActiveLink() {
        var scrollPosition = window.scrollY + 150; // Adjust scroll position for active link

        sections.forEach(function(section) {
            var sectionId = section.getAttribute('id');
            var bounding = section.getBoundingClientRect();
            var sectionTop = bounding.top + window.scrollY;
            var sectionBottom = bounding.bottom + window.scrollY;

            if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
                sidebarLinks.forEach(function(link) {
                    link.classList.toggle('active', link.getAttribute('href').includes(sectionId));
                });

                tocLinks.forEach(function(link) {
                    link.classList.toggle('active', link.getAttribute('href').includes(sectionId));
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink(); // Initial call to set the correct active link on page load
});
