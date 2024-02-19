const handleReveal = () => {
  const pathname = window.location.pathname.split("/")[1];

  const [urlReferrer, categoryPath] = handleSearchParams();

  // products page
  if (pathname === "products" || urlReferrer != categoryPath) {
    handleAnimation();
  }
  if (pathname === "products" || urlReferrer === categoryPath) {
    handleAnimation();
  }

  // product page
  if (pathname === "product") {
    handleAnimation();
  } else {
    return;
  }
};

const handleSearchParams = () => {
  const categoryPath = window.location.pathname.split("/")[2];

  window.onbeforeunload = function (event) {
    window.localStorage.setItem("current-url", categoryPath);
  };

  const urlReferrer = window.localStorage.getItem("current-url");
  return [urlReferrer, categoryPath];
};

const handleAnimation = () => {
  try {
    const nodeList = document.querySelectorAll(".revealContainer");

    nodeList.forEach((item) => {
      [...item.children].forEach((item, index) => {
        item.style.transitionDelay = `${100 + index * 50}ms`;
        item.style.opacity = "1";
        item.style.transform = `translateY(0px)`;
      });
    });
  } catch (error) {
    return;
  }
};
