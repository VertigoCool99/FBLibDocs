function showContent(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';

    const links = document.querySelectorAll('.sidebar ul li a');
    links.forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector(`.sidebar ul li a[onclick="showContent('${sectionId}')"]`).classList.add('active');
}

// Show the first section by default
document.addEventListener('DOMContentLoaded', () => {
    showContent('intro');
});
