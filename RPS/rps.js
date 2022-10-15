let choice = "", game = 0;
let choices = ["scissors", "paper", "rock"];
let games = [0, 0, 0, 0, 0];
let playButton = document.querySelector("#play");
let info = document.querySelector("#info");
let choiceButtons = document.querySelectorAll(".choiceButtons button");
let compbutton = document.querySelector("#compbutton");
let stats = document.getElementsByTagName("li");


function rock() {
  choice = "rock";
  playButton.textContent = "Play Rock!";
  playButton.disabled = false;
}

function paper() {
  choice = "paper";
  playButton.textContent = "Play Paper!";
  playButton.disabled = false;
}

function scissors() {
  choice = "scissors";
  playButton.textContent = "Play Scissors!";
  playButton.disabled = false;
}

function play() {
  for (let x of choiceButtons){
    x.disabled = true;
  }
  playButton.disabled = true;
  let aichoice = choices[Math.floor(Math.random()*3)];
  if (aichoice == choice) {
    games[game]=3;
    info.innerHTML = `It's a draw! Computer's choice was: ${aichoice}`;
  }
  for (let i=0; i<5; i++){
    if (choices[i%3]==choice && choices[(i+1)%3]==aichoice){
      games[game]=1;
      info.innerHTML = `You won! Computer's choice was: ${aichoice}`;
      break;
    }
  }
  if (games[game]==0) {
    games[game]=2;
    info.innerHTML = `You lost! Computer's choice was: ${aichoice}`;
  }
  stylescore();
  if (game==4){
    gameover(aichoice);
  }
  else{
  compbutton.disabled = false;
  compbutton.textContent = "Next round?";
  }
}

function stylescore() {
  switch (games[game]) {
    case 3:
      stats.item(game+5).style.backgroundColor = "#ffdb40";
      break;
    case 2:
      stats.item(game+5).style.backgroundColor = "#ff3f40";
      break;
    case 1:
      stats.item(game+5).style.backgroundColor = "#2ac3a2";
      break;
  }
}

function nextround() {
  game++;
  compbutton.textContent = "Computer";
  compbutton.disabled = true;
  choice = "";
  playButton.disabled = true;
  playButton.textContent = "Are you sure?"
  for (let x of choiceButtons){
    x.disabled = false;
  }
  info.innerHTML = `Computer is waiting on your turn...`;
}

function gameover(aichoice) {
  let playerscore = 0, aiscore = 0;
  playButton.style.color = "#000000";
  for (let i=0; i<5; i++){
    switch (games[i]) {
      case 2:
        aiscore++;
        break;
      case 1:
        playerscore++;
        break;
    }
  }
  if (playerscore == aiscore){
    playButton.style.backgroundColor = "#ffdb40";
    compbutton.style.backgroundColor = "#ffdb40";
    info.innerHTML = `Game is draw! Computer's last choice: ${aichoice}`;
  }
  if (playerscore > aiscore) {
    playButton.style.backgroundColor = "#2ac3a2";
    compbutton.style.backgroundColor = "#ff3f40";
    info.innerHTML = `Winner! Computer's last choice: ${aichoice}`;
  }
  if (playerscore < aiscore) {
    playButton.style.backgroundColor = "#ff3f40";
    compbutton.style.backgroundColor = "#2ac3a2";
    info.innerHTML = `Loser! Computer's last choice: ${aichoice}`;
  }
}
