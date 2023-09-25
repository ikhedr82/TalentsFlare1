$(function () {
  var navbarHeight = $(".navbar").outerHeight();

  function adjustBodyPadding() {
    navbarHeight = $(".navbar").outerHeight();
    $("body").css("padding-top", navbarHeight);
  }

  $(window).on("resize", adjustBodyPadding);
  adjustBodyPadding(); // Initial adjustment on page load

  // Smooth scrolling when clicking on navigation links
  function smoothScrolling(elementId) {
    const itemOffset =
      elementId != "#home"
        ? $(elementId).find(".container").offset()?.top - navbarHeight - 30
        : 0;
    window.scrollTo({
      top: itemOffset,
      behavior: "smooth",
    });
  }
  smoothScrolling(window.location.hash);
  $(
    '.navbar-nav a[href^="#"].scrolling-link, .footer-nav a[href^="#"].scrolling-link'
  ).on("click", function (e) {
    e.preventDefault();
    $(this).attr("href") && smoothScrolling($(this).attr("href"));
  });

  $(window).on("load", function (e) {
    e.preventDefault();
    window.location.hash && smoothScrolling(window.location.hash);
  });

  // Update the active item in the navigation menu based on scroll position
  $(window).on("scroll", function () {
    var scrollPosition = $(window).scrollTop();

    $(".navbar-nav a.scrolling-link").each(function () {
      var currentLink = $(this);
      var section = $(currentLink.attr("href"));

      if (
        section?.position()?.top <= scrollPosition + 100 &&
        section?.position()?.top + section.height() > scrollPosition + 100
      ) {
        $(".navbar-nav a").removeClass("active");
        currentLink.addClass("active");
      } else {
        currentLink.removeClass("active");
      }
    });
  });
});
