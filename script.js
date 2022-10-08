console.log("hello world");
let x = 5;
let y = 2;
let z = x ** y;
console.log(z);
console.log(typeof z);
let a = 16.618;
let b = a.toFixed(2);
console.log(b);
let c = "247";
console.log(typeof c);
c += "p";
console.log(typeof c);
console.log(c);
console.log(c !== a);

const btn = document.querySelector("button");
const txt = document.querySelector("p");

btn.addEventListener("click", togglemch);

function togglemch() {
  if (btn.textContent === "Start machine") {
    btn.textContent = "Stop machine";
    txt.textContent = "Machine is online";
  } else {
    btn.textContent = "Start machine";
    txt.textContent = "Machine is offline";
  }
}

const max = 57;
let actual = max-13;
let perc = actual / max;

console.log (`result is : ${c}`);
