$(document).ready(function () {

    $('hr').hide(0);
    $('#element1').fadeOut(0);
    $('#element2').fadeOut(0);
    $('#element3').fadeOut(0);
    $('#element4').fadeOut(0);
    $('h1').slideUp(0);
    $('h1').delay(1000).slideDown("slow");
    $('hr').delay(1400).show("slow");
    var actualTimer = 1200;

    $('#element1').delay(1400).fadeIn("slow");
    $('#element2').delay(1800).fadeIn("slow");
    $('#element3').delay(2200).fadeIn("slow");
    $('#element4').delay(2600).fadeIn("slow");
    $('body').scroll(function () {


        $("#map").animate({
            opacity: 0.25,
            left: '-25px',
        }, 200, function () {
            // Animation complete.
        });



    });
    $('h3').css('opacity', 0);
 
  $('h1').click(function() {
      $('h3').addClass('fadeInLeft');
  }, { offset: '90%' });
});
