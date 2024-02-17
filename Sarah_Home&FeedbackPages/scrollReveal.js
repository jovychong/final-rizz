// making sections only appear after scrolling
window.addEventListener('scroll', reveal);

function reveal() {
    var windowheight = window.innerHeight;
    var revealpoint = 7;
    var reveals = document.querySelectorAll('.reveal')

    for(var i = 0; i < reveals.length; i++) {
        var revealtop = reveals[i].getBoundingClientRect().top;

        if(revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }else {
            reveals[i].classList.remove('active');
        }
    }
}