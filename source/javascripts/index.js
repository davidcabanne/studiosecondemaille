document.addEventListener("DOMContentLoaded", function () {
  try {
    handleReveal();
    handleCart();
    handleMobileMenu();
    handleLinkClick();
    handleDescription();
    handleMagnet();
    handleInputs();
  } catch (error) {
    console.log(error);
  }
});
