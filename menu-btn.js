var primaryNav = document.querySelector('.primary-navigation');
var menuBtn = document.querySelector('.menu-btn');

var menuOpen = false;
menuBtn.addEventListener('click', () =>
{
    var visibility = primaryNav.getAttribute('data-visible');
    if(!menuOpen)
    {
        menuBtn.classList.add('open');
        menuOpen = true;
        primaryNav.setAttribute('data-visible', true);
    }
    else
    {
        menuBtn.classList.remove('open');
        menuOpen = false;
        primaryNav.setAttribute('data-visible', false);
        
    }
});
