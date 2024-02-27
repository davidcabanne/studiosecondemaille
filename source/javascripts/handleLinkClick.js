const handleLinkClick = () => {
  const links = {
    productLink: document.getElementById("product-link"),
    categoryLink: document.getElementById("category-link"),
  };

  Object.keys(links).forEach((key) => {
    const link = links[key];
    if (link) {
      link.addEventListener("click", function (event) {
        window.location.href = link.href;
        event.stopPropagation();
      });
    }
  });
};

handleLinkClick();
