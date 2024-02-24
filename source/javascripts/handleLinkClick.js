const handleLinkClick = () => {
  const links = {
    productLink: document.getElementById("product-link"),
    categoryLink: document.getElementById("category-link"),
  };

  Object.keys(links).forEach(key => {
    const link = links[key];
    if (link) { // Check if the link exists
      link.addEventListener("click", function (event) {
        window.location.href = link.href; // Use the href of the clicked link
        event.stopPropagation(); // Prevent event bubbling
      });
    }
  });
};

handleLinkClick(); // Call the function to attach the event listeners