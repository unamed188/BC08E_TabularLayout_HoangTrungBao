window.onload = function () {
    const SCROLLTOP = document.querySelector('#topHeader');
    const SCROLLBELOW = document.querySelector('#stickyHeader');
    window.addEventListener('scroll', scrollEffect);
    function scrollEffect () {
        if(window.scrollY > 0) {
            SCROLLTOP.style.display = 'none';
            SCROLLBELOW.style.display = 'block';
        }
        else {
            SCROLLTOP.style.display = 'block';
            SCROLLBELOW.style.display = 'none';
        }
    }
}