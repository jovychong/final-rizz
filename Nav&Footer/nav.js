// Menu Button
function show() {
    document.querySelector('.hamburger').classList.toggle('open');
    document.querySelector('.navigation').classList.toggle('active');
    document.querySelector('.main-section').classList.toggle('outfoucs');
    document.querySelector('html').classList.toggle('disable-scroll');
}

// Making the Topnav change when scrolling past a certain point in page
document.addEventListener('scroll', () => {
    const navbar = document.querySelector('.topnav');

    if (window.scrollY > 175){
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
})