$(window).scroll(function() {
  var topheight = $(window).scrollTop();
  $(document).height() - $(window).height() - $(window).scrollTop();
  /*Если сделали скролл на 100px задаём новый класс для header*/
  if (topheight > 60) {
    $(".navigation").css("position", "fixed");
    $(".navigation").css("background-color", "#2E3C50");
    $(".navigation").css("border-radius", "15rem");
  } else {
    $(".navigation").css("background-color", "transparent");
  }
  if (topheight < 750) {
  }
});
