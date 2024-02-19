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
  const headerLogo = document.querySelector(".header-span");
  const menuIcon = document.querySelector(".menuIcon");

  body.classList.toggle("bodyActive");
  navMobile.classList.toggle("navMobileActive");
  headerLogo.classList.toggle("header-spanActive");
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
      item.style.opacity = "1";
      item.style.transform = "translateY(0px)";
      item.style.transitionDelay = `${50 + index * 50}ms`;
    });
  }
  if (!state) {
    [...nodeList.children].reverse().forEach((item, index) => {
      item.style.opacity = "0";
      item.style.transform = "translateY(-16px)";
      item.style.transitionDelay = `${50 + index * 50}ms`;
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
