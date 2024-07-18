document.addEventListener("DOMContentLoaded", function() {
    var tocLinks = document.querySelectorAll('.toc-link');
    var sidebarLinks = document.querySelectorAll('.sidebar-link');

    // Smooth scrolling for TOC links
    tocLinks.forEach(function(link) {
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
    });

    // Smooth scrolling for Sidebar links
    sidebarLinks.forEach(function(link) {
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
    });

    // Highlight active section in sidebar and TOC
    window.addEventListener('scroll', function() {
        var sections = document.querySelectorAll('.content-section');
        
        sections.forEach(function(section, index) {
            var bounding = section.getBoundingClientRect();
            
            if (bounding.top <= 150 && bounding.bottom >= 150) {
                // Update active links in sidebar
                sidebarLinks.forEach(function(link) {
                    link.classList.remove('active');
                });
                if (sidebarLinks[index]) {
                    sidebarLinks[index].classList.add('active');
                }

                // Update active links in TOC
                tocLinks.forEach(function(link) {
                    link.classList.remove('active');
                });
                if (tocLinks[index]) {
                    tocLinks[index].classList.add('active');
                }
            }
        });
    });
});
