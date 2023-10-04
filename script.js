const toggleButton = document.getElementById('toggleButton');
const iconsContainer = document.querySelector('.icons');

toggleButton.addEventListener('click', () => {
    iconsContainer.classList.toggle('hide-icons');
});
