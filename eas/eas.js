let eas = document.querySelector(".eas");
let color = 0;

for (let i = 0; i < 100; i++) {
  let pix = document.createElement("div");
  pix.classList.add("pixel");
  eas.appendChild(pix);
  pix.addEventListener("mouseover", (x) => paint(x));
}

function paint(x) {
  color = rand(16777215);
  color = color.toString(16);
  for (; color.length<6; color="0"+color) {}
  x.target.style.cssText = `background-color: #${color}`;
}

function rand(a, b) {
  if (!b){
    b = a;
    a = 0;
  }
  let c = b - a + 1;
  return (Math.floor(Math.random()*c)+a);
}
