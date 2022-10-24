let eas = document.querySelector(".eas");
let input = document.querySelector("input");
window.addEventListener ("DOMContentLoaded", set);
let color = 0;
let inpint = 10;

function getint() {
  let gotint = +input.value;
  input.value = "";
  if (!gotint || gotint > 100) return;
  inpint = gotint;
  let pixels = document.querySelectorAll(".pixel");
  pixels.forEach((pixel) => eas.removeChild(pixel));
  set();
}

function set() {
  for (let i = 0; i < inpint*inpint; i++) {
    let pix = document.createElement("div");
    pix.classList.add("pixel");
    pix.style.cssText = `width:${46/inpint}vw; height:${46/inpint}vw;`;
    eas.appendChild(pix);
    pix.addEventListener("mouseover", (x) => paint(x));
  }
}

function paint(x) {
  if (x.buttons != 1) return;
  color = rand(16777215);
  color = color.toString(16);
  for (; color.length < 6; color = "0" + color) {}
  x.target.style.cssText = `background-color: #${color}; width:${46/inpint}vw; height:${46/inpint}vw;`;
}

function rand(a, b) {
  if (!b) {
    b = a;
    a = 0;
  }
  let c = b - a + 1;
  return Math.floor(Math.random() * c) + a;
}
