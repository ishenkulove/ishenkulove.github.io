//  navigation: postition fixed
(function() {
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
})();

// navigation: active item
(function() {
  function activeItem(item, activeItem, activeClass) {
    for (let i = 0; i < item.length; i++) {
      $(item[i]).removeClass(activeClass);
      $(activeItem).addClass(activeClass);
    }
  }

  let navOption = document.querySelector(".navigation-options__list").children;
  $(navOption).click(function() {

    activeItem(navOption, this, "active-item");
  });

  $(document).height() - $(window).height() - $(window).scrollTop();
  $(window).scroll(function() {
    var topheight = $(window).scrollTop();
    if (topheight >= 900 && topheight <= 1599) {
      activeItem(navOption, navOption[0], "active-item");
    } else if ((topheight >= 1600) & (topheight <= 2299)) {
      activeItem(navOption, navOption[1], "active-item");
    } else if (topheight >= 2490) {
      activeItem(navOption, navOption[3], "active-item");
    } else {
      activeItem(navOption, this, "active-item");
    }
  });
})();

// $(document).ready(function() {
//   $("#navigation").on("click", "a", function(event) {
//     event.preventDefault();
//     var id = $(this).attr("href"),
//       top = $(id).offset().top;
//     $("body,html").animate({ scrollTop: top }, 1500);
//   });
// });
