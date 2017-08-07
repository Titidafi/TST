$(document).ready(function () {
    setTimeout(function () {
        $("h1").addClass("animated fadeInDown");
    }, 500);
    setTimeout(function () {
        $('hr').addClass('animated fadeIn');
    }, 1000);
    var index = 1;
    var menu_timeout = 2 * 800;
    var ecart = 500;

    setTimeout(function () {

        $('#element' + index).addClass('animated fadeIn');
        index = index + 1;
    }, menu_timeout);

    setTimeout(function () {
        $('#element' + index).addClass('animated fadeIn');
        index = index + 1;
    }, menu_timeout + ecart);

    setTimeout(function () {
        $('#element' + index).addClass('animated fadeIn');
        index = index + 1;
    }, menu_timeout + ecart*2);

    setTimeout(function () {
        $('#element' + index).addClass('animated fadeIn');
        index = index + 1;
    }, menu_timeout + ecart*3);

    setTimeout(function () {
        $('#element' + index).addClass('animated fadeIn');
        index = index + 1;
    }, menu_timeout + ecart*4);
    
 ////////////////////// ANIMATIONS ON SCROLL ////////////////
    $('#ma_personne').css('opacity', 0);
 
  $('#ma_personne').waypoint(function() {
      $('#ma_personne').addClass('animated fadeInLeft');
  }, { offset: '25%' });


    ////////////////// ANIMATED BACKGROUND ////////////////

    $('#bg').particleground();
});