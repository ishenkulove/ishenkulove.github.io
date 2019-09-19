$(window).scroll(function() {
  var topheight = $(window).scrollTop();
  /*Если сделали скролл на 100px задаём новый класс для header*/
  if (topheight > 600) {
    $("#rightText").addClass(" animated bounceInLeft delay-1s ");
    $("#leftText").addClass(" animated bounceInRight delay-1s ");
  }
  if (topheight > 1300) {
    $("#rightIcon").addClass(" animated bounceInRight delay-1s ");
  }
});

$(".header-burgermenu__img").click(function() {
  if (
    $(".header-burgermenu__img").attr("src") == "images/icons/burger-menu.png"
  ) {
    $(".burger-menu-content").css("display", "flex");
    $(".header-burgermenu__img").attr(
      "src",
      "images/icons/burgermenu-close.png"
    );
  } else {
    $(".header-burgermenu__img").attr("src", "images/icons/burger-menu.png");
    $(".burger-menu-content").css("display", "none");
  }
});
