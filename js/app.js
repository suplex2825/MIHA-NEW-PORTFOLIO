$(document).ready(function () {
  new WOW().init();

  $('.first-button').on('click', function () {

    $('.animated-icon1').toggleClass('open');
  });


  $(function() {
  $('.navthem a, .canscroll, .contact').click(function(e) {
    e.preventDefault();
    $('body, html').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 750);
  });
});
});