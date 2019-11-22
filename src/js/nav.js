/* Hamburger animation */
$('.hamburger').click(function() {
  $(this).toggleClass('is-active');
})

/* Navigation styling on-scroll */
let scrollPosition = 0;
let elNavbar = document.querySelector('.navbar');

window.addEventListener('scroll', function(e) {
  scrollPosition = window.scrollY;

  if (scrollPosition > 200 && !elNavbar.classList.contains('navbar-scrolled')) {
    elNavbar.classList.add('navbar-scrolled');
  } else if (scrollPosition <= 199 && elNavbar.classList.contains('navbar-scrolled')) {
    elNavbar.classList.remove('navbar-scrolled');
  } else {
    return false;
  }
});