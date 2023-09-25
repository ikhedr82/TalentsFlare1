$(window).on("load", function () {
  $(".loadingContainer")
    .delay(3000)
    .fadeOut(1000, function () {
      $(".loadingScreen").fadeOut(1000, function () {
        $(".loadingScreen").remove();
      });
    });
});
