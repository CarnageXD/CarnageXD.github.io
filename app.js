let animItems = document.querySelectorAll(".anim-item");
// ПОЛУЧИТЬ РАССТОЯНИЕ ЭЛЕМЕНТА ОТ НАЧАЛА СТРАНИЦЫ
function offset(el) {
  var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}

if (animItems.length > 0) {
  window.addEventListener("scroll", animOnScroll);
  function animOnScroll() {
    for (i = 0; i < animItems.length; i++) {
      const animItem = animItems[i];
      const animItemHeightFromTop = offset(animItem).top;
      const animItemHeight = animItem.offsetHeight;
      let koef = window.innerHeight - animItemHeight / 4;
      if (animItemHeight > window.innerHeight) {
        koef = (3 / 4) * window.innerHeight;
      }

      if (window.pageYOffset > animItemHeightFromTop - koef) {
        animItem.classList.add("active");
      } else animItem.classList.remove("active");
    }
  }
}
animOnScroll();
