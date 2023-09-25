$(function () {
  $(".navbar-nav .nav-link").on("click", function () {
    if ($(window).width() < 992) {
      $(".navbar-collapse").collapse("hide");
    }
  });

  var container = $("#nav-container");
  function calcContainerEndSpace() {
    var windowWidth = $(window).outerWidth();
    var space =
      windowWidth - (container.offset().left + container.outerWidth());
    console.log("space ", space);
    var topNav = $("#floating-nav");
    topNav.css({
      paddingInlineEnd: space + 6 + "px",
    });
    console.log("windowWidth 1 ", windowWidth);

    if (windowWidth < 992) {
      console.log("windowWidth 2 ", windowWidth);

      topNav.css({
        paddingInlineStart: space + 6 + "px",
      });
    } else {
      topNav.css({
        paddingInlineStart: 12 + "px",
      });
    }
  }
  calcContainerEndSpace();

  $(window).on("resize", function () {
    calcContainerEndSpace();
  });
});
