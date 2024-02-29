const handleMagnet = () => {
  let mouse = { x: 0, y: 0 };
  let buttonArr;

  function initItems() {
    buttonArr = [];
    document.querySelectorAll(".magnetItem").forEach((item) => {
      buttonArr.push({
        elem: item,
        x: item.getBoundingClientRect().left + item.clientWidth / 2,
        y: item.getBoundingClientRect().top + item.clientHeight / 2,
        x_dest: 0,
        y_dest: 0,
      });
    });
  }

  window.addEventListener("resize", () => {
    initItems();
    mouse = { x: 0, y: 0 };
  });

  window.addEventListener("scroll", () => {
    initItems();
    mouse = { x: 0, y: 0 };
  });

  window.addEventListener("mousemove", (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
  });

  initItems();

  const updateSpeed = 0.05;

  // The higher the value, the effect would apply less;
  const xAxisRatio = 2;
  const yAxisRatio = 2;

  function update() {
    buttonArr.forEach((item) => {
      // Translating them ( relative distance from origin )
      var relPos = { x: mouse.x - item.x, y: mouse.y - item.y };

      // Distance between 2 points ( from origin )
      d = Math.sqrt(relPos.x ** 2 + relPos.y ** 2);

      // Checking the proximity with an arbitrary ratio, if not, set the relative change to 0
      if (d > item.elem.clientWidth / yAxisRatio) {
        relPos.x = 0;
        relPos.y = 0;
      }

      // Easing
      item.x_dest += (relPos.x - item.x_dest) * updateSpeed;
      item.y_dest += (relPos.y - item.y_dest) * updateSpeed;

      item.elem.style.setProperty("--x", `${item.x_dest / (xAxisRatio * 2)}px`);
      item.elem.style.setProperty("--y", `${item.y_dest / (yAxisRatio * 2)}px`);
    });

    window.requestAnimationFrame(update);
  }

  window.requestAnimationFrame(update);
};
