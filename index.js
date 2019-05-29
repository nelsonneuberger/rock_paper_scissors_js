var title = document.getElementById("title");
title.addEventListener("click", function(){
  debugger
})
var options = ["rock", "paper", "scissors"];
var colors = ["yellow", "green", "red"];
var results = ["You lost!", "You won!"];
var userChoice;

var btn1 = document.getElementById('btn1');
btn1.addEventListener("click", changeColor);
function changeColor() {
  document.body.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
};

var btn2 = document.getElementById('btn2');
btn2.addEventListener("click", changeColor);
function changeColor() {
  document.body.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
};

var btn3 = document.getElementById('btn3');
btn3.addEventListener("click", changeColor);
function changeColor() {
  document.body.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
};

var choices = document.getElementsByClassName("choice");
console.log(choices);
// choices.forEach( function(choice) {
//   choice.addEventListener("click", function() {
//     debugger
//   });
// })
for(var i = 0; i < choices.length; i++) {
  choices[i].addEventListener("click", function() {
    userChoice = this.id;
    // get the comp choice
    // display choices
    // determine winner 
  });
}