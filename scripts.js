document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseover', () => {
            dropdown.querySelector('.submenu').style.display = 'block';
        });
        dropdown.addEventListener('mouseout', () => {
            dropdown.querySelector('.submenu').style.display = 'none';
        });
    });
});
