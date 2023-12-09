// Function to toggle a class for navigation menu on small screens
function toggleMenu() {
    const navList = document.querySelector('.header ul');
    navList.classList.toggle('show');
}

// Add an event listener for the menu button
const menuButton = document.querySelector('.header div');
menuButton.addEventListener('click', toggleMenu);