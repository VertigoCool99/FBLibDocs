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
