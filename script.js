$(document).ready(function() {
  var scroll_start = 0;
  var startchange = $('#startchange');
  var offset = startchange.offset();
  if (startchange.length) {
    $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if (scroll_start > offset.top) {
        $(".navbar-default").css('background-color', '#006076');
        $(".navbar-brand.brand").css('color', '#FFFFFF');
      } else {
        $('.navbar-default').css('background-color', 'transparent');
        $(".navbar-brand.brand").css('color', '#000000');

      }
    });
  }
});