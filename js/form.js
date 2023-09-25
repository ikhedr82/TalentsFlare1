$(function () {
  function setHeight() {
    var trustedContainerHeight = $(".trusted-container").height();
    $(".trusted-by").css("min-height", trustedContainerHeight);
  }
  setHeight();

  $(window).on("resize", function () {
    setHeight();
  });
});
