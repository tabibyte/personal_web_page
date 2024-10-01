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



// JavaScript for theme switching remains the same
const lightThemeButton = document.getElementById('light-theme');
const darkThemeButton = document.getElementById('dark-theme');

lightThemeButton.addEventListener('click', () => {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');

    lightThemeButton.classList.add('selected');
    darkThemeButton.classList.remove('selected');
});

darkThemeButton.addEventListener('click', () => {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');



    darkThemeButton.classList.add('selected');
    lightThemeButton.classList.remove('selected');
});