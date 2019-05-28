var title = document.getElementById("title");
title.addEventListener("click", function(){
  debugger
})

var options = ["rock", "paper", "scissors"];
var userChoice;

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
    // determine winer 
  });
}