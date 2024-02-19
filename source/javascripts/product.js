(function () {
  $(function () {
    return $(".product_images").on("click", "a", function (event) {
      event.preventDefault();
      $(".primary_image").prop("src", $(this).prop("href"));
      $(".product_images li.selected").removeClass("selected");
      return $(this).closest("li").addClass("selected");
    });
  });
}).call(this);
