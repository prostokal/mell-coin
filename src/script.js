import './sass/style.scss';

// Tokenomica
document.querySelectorAll('.tokenomika__item-percent').forEach((item, i) => {
    document.querySelectorAll('.tokenomika__item-slider span')[i].style.width = item.innerHTML;
});

// Hamburger
const menu = document.querySelector('.menu');

document.querySelector('.hamburger').addEventListener('click', () => {
    menu.classList.add('active');
});
function close(p) {
    document.querySelectorAll(p).forEach((element) => {
        element.addEventListener('click', (e) => {
            menu.classList.remove('active');
        });
    });
}
close('.menu__close');
close('.menu__link a');

