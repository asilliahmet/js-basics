function postadd() {
  let ini = document.getElementById("instr").value;
  if (ini != "") {
    document.getElementById("output").innerHTML = ini;
  }
  document.getElementById("instr").value = "";
  let out = document.getElementById("output").innerText;
  let ins = document.getElementById("insstr").value;
  document.getElementById("output").innerHTML = out + ins;
}

function preadd() {
  let ini = document.getElementById("instr").value;
  if (ini != "") {
    document.getElementById("output").innerHTML = ini;
  }
  document.getElementById("instr").value = "";
  let out = document.getElementById("output").innerText;
  let ins = document.getElementById("insstr").value;
  document.getElementById("output").innerHTML = ins + out;
}
