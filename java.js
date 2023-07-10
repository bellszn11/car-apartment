const navberItems = document.querySelector ('#navberitems');
const openNavBtn = document.querySelector ('#open-menu-btn');
const closeNavBtn = document.querySelector ('#close-menu-btn');



openNavBtn.addEventListener ('click', () => {
    navberItems.style.width = '50rem';
    openNavBtn.style.display = 'none';
    navberItems.style.display = 'block';
    closeNavBtn.style.display = 'inline-block';

})



closeNavBtn.addEventListener ('click', () => {
    navberItems.style.width = '0';
    closeNavBtn.style.display = 'none';
    navberItems.style.display = 'none';
    openNavBtn.style.display = 'inline-block';

})