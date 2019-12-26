$(document).ready(function () {
   $('.doitnow').AniView({
     animateThreshold: 100,
    scrollPollInterval: 20
   });


  var mixer = $('.filterthem').isotope();
  $('#filters').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  mixer.isotope({ filter: filterValue });
});

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