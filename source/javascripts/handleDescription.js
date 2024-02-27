const handleDescription = () => {
  let state = false;
  const callToAction = document.querySelector(".productDescriptionTrigger");
  const descriptionContent = document.querySelector(
    ".productDescriptionContainer"
  );

  if (callToAction) {
    callToAction.addEventListener("click", function () {
      state = !state;
      if (state) {
        descriptionContent.classList.add("active");
        callToAction.innerHTML="Close";

      }
      if (!state) {
        descriptionContent.classList.remove("active");
        callToAction.innerHTML="Description";
      }
    });
  }
};

handleDescription();
