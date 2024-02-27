document.addEventListener("DOMContentLoaded", function () {
  try {
    handleReveal();
    handleCart();
    handleMobileMenu();
    handleLinkClick();
    handleDescription();
    // handleInputs();
    // handleScrollDir();
  } catch (error) {
    console.log(error);
  }
});
