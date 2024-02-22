document.addEventListener("DOMContentLoaded", function () {
  try {
    handleReveal();
    handleCart();
    handleMobileMenu();
    // handleScrollDir();
  } catch (error) {
    console.log(error);
  }
});
