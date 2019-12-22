$(document).ready(function () {
  AOS.init();

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


  jQuery('.skillbar').each(function(){
    jQuery(this).find('.skillbar-bar').animate({
      width:jQuery(this).attr('data-percent')
    },6000);
  });
});