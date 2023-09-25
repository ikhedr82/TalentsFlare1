$(function () {
  var writeList = $(".write-list");
  var writeStrings = writeList.find(".string");
  var writeEffect = $(".write-effect");
  var currentIndex = 0;
  var currentString = "";
  var charIndex = 0;
  var isDeleting = false;

  function typeText() {
    var string = writeStrings.eq(currentIndex).text();

    if (!isDeleting) {
      currentString = string.substring(0, charIndex + 1);
      writeEffect.text(currentString);
      charIndex++;

      if (charIndex === string.length) {
        isDeleting = true;
        setTimeout(typeText, 1500);
      } else {
        setTimeout(typeText, 100);
      }
    } else {
      currentString = string.substring(0, charIndex - 1);
      writeEffect.text(currentString);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        currentIndex++;

        if (currentIndex >= writeStrings.length) {
          currentIndex = 0;
        }

        setTimeout(typeText, 1000);
      } else {
        setTimeout(typeText, 100);
      }
    }
  }

  typeText();

  function adjustHeaderHeight() {
    var windowHeight = $(window).height();
    var navbarHeight = $(".navbar").outerHeight();
    var headerHeight = windowHeight - navbarHeight;
    $(".home-header").css("height", headerHeight + 50);
  }

  $(window).on("resize", function () {
    if ($(window).width() >= 992) {
      // Adjust the breakpoint as needed
      adjustHeaderHeight();
    } else {
      $(".home-header").css("height", ""); // Reset height for smaller screens
    }
  });

  if ($(window).width() >= 992) {
    // Adjust the breakpoint as needed
    adjustHeaderHeight();
  }

  $(".owl-carousel.owl-testimonials").owlCarousel({
    items: 1,
    responsive: {
      1200: {
        items: 3,
      },
      992: {
        items: 2,
      },
      768: {
        items: 1,
      },
      576: {
        items: 1,
      },
    },
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: true,
    loop: true,
    nav: true,
    navText: [
      '<div class="nav-btn prev-slide"></div>',
      '<div class="nav-btn next-slide"></div>',
    ],
  });

  $(".expert-team-carousel .owl-carousel").owlCarousel({
    items: 1,
    responsive: {
      1200: {
        items: 3,
      },
      992: {
        items: 2,
      },
      768: {
        items: 1,
      },
      576: {
        items: 1,
      },
    },
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<div class="nav-btn prev-slide"></div>',
      '<div class="nav-btn next-slide"></div>',
    ],
  });

  $(".coming-events-carousel .owl-carousel").owlCarousel({
    items: 1,
    responsive: {
      1200: {
        items: 3,
      },
      992: {
        items: 2,
      },
      768: {
        items: 1,
      },
      576: {
        items: 1,
      },
    },
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    dots: true,
    loop: true,
    nav: true,
    navText: [
      '<div class="nav-btn prev-slide"></div>',
      '<div class="nav-btn next-slide"></div>',
    ],
  });
});
