const handleZoomImage = () => {
  const images = document.querySelectorAll(".zoom_image");

  if (images.length > 0) {
    images.forEach((image) => image.addEventListener("click", handleZoom));
  }

  document.getElementById("closeModal").addEventListener("click", function () {
    document.getElementById("fullscreenModal").style.display = "none";
  });
};

function handleZoom() {
  const src = this.src;

  document.getElementById("fullscreenImage").src = src;

  document.getElementById("fullscreenModal").style.display = "flex";
}
