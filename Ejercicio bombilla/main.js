const btn = document.getElementById("btn");
const light = document.getElementById("light");
var toggle = true, width = light.width, height = light.height;
const controls = document.getElementById("controls");
const zoom = document.getElementById("zoom");
const level = document.getElementById("level");

btn.addEventListener("click", function () {
  toggle = !toggle;
  if (toggle) {
    btn.setAttribute("src", "./boff.jpg");
    light.setAttribute("src", "./off.jpg");
    controls.style.display = "none";
  } else {
    btn.setAttribute("src", "./bon.jpg");
    light.setAttribute("src", "./on.jpg");
    controls.style.display = "flex";
  }
});

level.addEventListener("input", function () {
  light.style.opacity = level.value / 100;
});
zoom.addEventListener("input", function () {
    light.width = width * (zoom.value / 100);
    light.height = height * (zoom.value / 100);
  });