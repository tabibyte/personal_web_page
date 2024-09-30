document.addEventListener('DOMContentLoaded', () => {

    const navItems = document.querySelectorAll('nav ul li');
    const sections = document.querySelectorAll('section');

    const removeSelectedClass = () => {
        navItems.forEach(item => {
            item.classList.remove('selected');
        });
        sections.forEach(section => {
            section.style.display = 'none';
        });
    };

    const showSection = (sectionId) => {
        const section = document.querySelector(sectionId);
        if (section) {
            section.style.display = 'block';
        }
    };

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const target = item.querySelector('a').getAttribute('href');

            removeSelectedClass();
            item.classList.add('selected');
            showSection(target);
        });
    });

    showSection('#about');
});
