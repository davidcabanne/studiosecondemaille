// function scrollEventThrottle(fn) {
//   let last_known_scroll_position = 0;
//   let ticking = false;
//   window.addEventListener("scroll", function () {
//     let previous_known_scroll_position = last_known_scroll_position;
//     last_known_scroll_position = window.scrollY;
//     if (!ticking) {
//       window.requestAnimationFrame(function () {
//         fn(last_known_scroll_position, previous_known_scroll_position);
//         ticking = false;
//       });
//       ticking = true;
//     }
//   });
// }

// // ## function invocation
// scrollEventThrottle((scrollPos, previousScrollPos) => {
//   const header = document.querySelector(".header");
//   // SCROLL UP
//   if (previousScrollPos > scrollPos) {
//     header.style.transform = "translateY(0px)";
//   }
//   // SCROLL DOWN
//   else {
//     header.style.transform = "translateY(-96px)";
//   }
// });
