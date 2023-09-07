// select menu hamburger
const menu = document.querySelector('.menu');
console.log(menu);
const iconHamburger = document.getElementsByClassName('iconHamburger');
console.log(iconHamburger);
menu.addEventListener('click', (e) => {
    const menuAppear = menu.childNodes[3];
    if(e.target) {
        console.log(menuAppear)
        menuAppear.classList.toggle('navBar1');
    }
});
