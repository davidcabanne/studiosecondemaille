function handleCart() {
  const input = document.querySelector(".cartProductItemQtyInput");

  if (window.location.pathname === "/cart" && input !== null) {
    const buttonDecrement = document.querySelectorAll(".buttonDecrement");
    const buttonIncrement = document.querySelectorAll(".buttonIncrement");
    handleClick(buttonDecrement, buttonIncrement);
  }
  if (window.location.pathname !== "/cart") {
    return;
  }
}

function handleClick(buttonDecrement, buttonIncrement) {
  buttonDecrement.forEach((item) =>
    item.addEventListener("click", handleDecrement)
  );
  buttonIncrement.forEach((item) =>
    item.addEventListener("click", handleIncrement)
  );
}

function handleDecrement(event) {
  event.preventDefault();
  handleInput(false, event);
}
function handleIncrement(event) {
  event.preventDefault();
  handleInput(true, event);
}

function handleInput(state, event) {
  const form = document.querySelector(".cartForm");
  let currentInput;

  state === false
    ? (currentInput = event.target.nextElementSibling.children)
    : (currentInput = event.target.previousElementSibling.children);

  if (state && currentInput[0].value < 10) {
    currentInput[0].value++;
  }
  if (!state && currentInput[0].value > 0) {
    currentInput[0].value--;
  }

  form.submit();
}
