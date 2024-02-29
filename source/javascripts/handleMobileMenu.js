let state = false;

const handleMobileMenu = () => {
  const menuIcon = document.querySelector(".menuIcon");
  menuIcon.addEventListener("click", handleToggle);
  window.addEventListener("resize", handleResize, true);
};

const handleToggle = () => {
  state = !state;
  const body = document.body;
  const navMobile = document.querySelector(".navMobile");
  const menuIcon = document.querySelector(".menuIcon");

  body.classList.toggle("bodyActive");
  navMobile.classList.toggle("navMobileActive");
  menuIcon.classList.toggle("menuIconActive");

  if (state) {
    menuIcon.innerHTML = "close";
  }
  if (!state) {
    menuIcon.innerHTML = "menu";
  }
  handleMenuAnimation(state, navMobile);
};

const handleMenuAnimation = (state, navMobileUl) => {
  const nodeList = navMobileUl.children[0];

  if (state) {
    [...nodeList.children].forEach((item, index) => {
      item.children[0].style.opacity = "1";
      item.children[0].style.transform = "translateX(0px)";
      item.children[0].style.transitionDelay = `${50 + index * 25}ms`;
    });
  }
  if (!state) {
    [...nodeList.children].reverse().forEach((item, index) => {
      item.children[0].style.opacity = "0";
      item.children[0].style.transform = "translateX(-32px)";
      item.children[0].style.transitionDelay = `${50 + index * 25}ms`;
    });
  }
};

const handleResize = (event) => {
  const body = document.body;
  const navMobile = document.querySelector(".navMobile");
  const headerLogo = document.querySelector(".header-span");
  const menuIcon = document.querySelector(".menuIcon");

  if (event.target.innerWidth > 768 && state) {
    state = false;
    body.classList.remove("bodyActive");
    navMobile.classList.remove("navMobileActive");
    headerLogo.classList.remove("header-spanActive");
    menuIcon.classList.remove("menuIconActive");
    menuIcon.innerHTML = "menu";

    handleMenuAnimation(state, navMobile);
  }
};
