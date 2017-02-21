$( document ).ready(function() {
  $('.countdown').countdown('2017/09/09', function(event) {
    $('.countdown__months').html(event.strftime('%m'));
    $('.countdown__days').html(event.strftime('%n'));
    $('.countdown__hours').html(event.strftime('%H'));
  });
});
