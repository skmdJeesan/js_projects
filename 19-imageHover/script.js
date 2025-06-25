const elems = document.querySelectorAll(".elem");

elems.forEach((elem) => {
  console.log(elem);
  elem.addEventListener("mouseenter", function (e) {
    elem.childNodes[3].style.opacity = 1;
    elem.style.backgroundColor = "#111"
  });
  elem.addEventListener("mouseleave", function (e) {
    elem.childNodes[3].style.opacity = 0;
    elem.style.backgroundColor = 'black'
  });
  elem.addEventListener("mousemove", function (e) {
    elem.childNodes[3].style.left = e.x + "px";
    //elem.childNodes[3].style.top = e.y + "px";
  });
});
