function showContent(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

// Show the first section by default
document.addEventListener('DOMContentLoaded', () => {
    showContent('intro');
});
