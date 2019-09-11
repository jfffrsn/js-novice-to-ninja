//building a popup

const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');

//show popup
button.addEventListener('click', () => {
    popup.style.display = 'block';
});

//close button
close.addEventListener('click', () => {
    popup.style.display = 'none';
});

//click on popup itself to hide
popup.addEventListener('click', () => {
    popup.style.display = 'none';
});
