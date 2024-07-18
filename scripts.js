document.addEventListener("DOMContentLoaded", function() {
    function highlightActiveLink() {
        var sidebarLinks = document.querySelectorAll('.sidebar-link');
        var sections = document.querySelectorAll('.content-section');

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
            }
        });
    }

    window.addEventListener('scroll', highlightActiveLink);
    highlightActiveLink(); // Initial call to set the correct active link on page load
});
