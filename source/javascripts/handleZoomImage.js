const handleZoomImage = () => {
  const images = document.querySelectorAll(".zoom_image");

  if (images.length > 0) {
    images.forEach((image) => image.addEventListener("click", handleZoom));
  }

  document.getElementById("closeModal").addEventListener("click", () => {
    document.getElementById("fullscreenModal").classList.remove("active");
  });
};

function handleZoom() {
  const src = this.src;

  document.getElementById("fullscreenImage").src = src;
  document.getElementById("fullscreenModal").classList.add("active");
}
