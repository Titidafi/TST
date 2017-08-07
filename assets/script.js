$(document).ready(function () {
    setTimeout(function () {
        $("h1").addClass("animated fadeInDown");
    }, 500);
    setTimeout(function () {
        $('hr').addClass('animated fadeIn');
    }, 1000);
    var index = 1;
    var menu_timeout = 1000;

    setTimeout(function () {

        $('#element' + index).addClass('animated fadeIn');
        index = index + 1;
    }, 2 * menu_timeout);

    setTimeout(function () {
        $('#element' + index).addClass('animated fadeIn');
        index = index + 1;
    }, 3 * menu_timeout);

    setTimeout(function () {
        $('#element' + index).addClass('animated fadeIn');
        index = index + 1;
    }, 4 * menu_timeout);

    setTimeout(function () {
        $('#element' + index).addClass('animated fadeIn');
        index = index + 1;
    }, 5 * menu_timeout);

    setTimeout(function () {
        $('#element' + index).addClass('animated fadeIn');
        index = index + 1;
    }, 6 * menu_timeout);

    $('#ma_personne').css('opacity', 0);
 
  $('#ma_personne').waypoint(function() {
      $('#ma_personne').addClass('animated fadeInLeft');
  }, { offset: '25%' });
    $('#bg').particleground();
});