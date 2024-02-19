let modal;
let modalBtn;
let modalImg;

function handleModal() {
  const productUrl = window.location.pathname.split("/")[1];
  const imgs = document.querySelectorAll(".primary_image");
  modal = document.querySelector(".modal");
  modalBtn = document.querySelector(".modal-btn");
  modalImg = document.querySelector(".modal-img");

  if (productUrl === "product") {
    imgs.forEach((img) => img.addEventListener("click", handleOpenModal));
  } else {
    return;
  }
}

const handleOpenModal = (event) => {
  modal.classList.add("modal-active");
  modalImg.src = event.target.src;

  modalBtn.addEventListener("click", function () {
    modal.classList.remove("modal-active");
  });

  modal.addEventListener("click", function (event) {
    if (modalImg.contains(event.target)) {
      // Clicked in box
      return;
    } else {
      modal.classList.remove("modal-active");
      return;
    }
  });
};
