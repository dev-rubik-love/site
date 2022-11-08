$(document).ready(function() {
  $('.hamburger').click(function(event) {
    $('.hamburger, .nav-hamburger').toggleClass('active');
  })
})

$(document).ready(function() {
  $('.nav-list-item').click(function(event) {
    $('.hamburger, .nav-hamburger').toggleClass('active');
  })
})

document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);
        // const topOffset = 0; // если не нужен отступ сверху 
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - 100;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});