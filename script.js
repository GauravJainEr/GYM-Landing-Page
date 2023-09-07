const barshow1Id = document.getElementById('barshow1Id');
const nav_bar1_Id = document.getElementById('nav_bar1_Id');
const colordifferent = document.getElementById('colordifferent');
let isNavVisible = false;

barshow1Id.addEventListener('click', () => {
    if (isNavVisible) {
        nav_bar1_Id.classList.remove('show');
        colordifferent.classList.add('colorchange');
        
    } else {
        nav_bar1_Id.classList.add('show');
        colordifferent.classList.remove('colorchange');
    }
    isNavVisible = !isNavVisible;
});