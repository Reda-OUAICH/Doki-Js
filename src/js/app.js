// Replace ./data.json with your JSON feed
fetch('./js/data.json').then(response => {  
  return response.json();
}).then(data => {   // Work with JSON data here
  image.src = data.steps[0].img_src;
  questions.innerHTML = data.steps[0].description;
  firstAnswer.innerHTML = data.steps[0].option1.description;
  secondAnswer.innerHTML = data.steps[0].option2.description;
}).catch(err => {   // Do something for an error here
});


var questions = document.querySelector('#questions');
var firstAnswer = document.querySelector('#answer1');
var secondAnswer = document.querySelector('#answer2');
var image = document.querySelector('#character');
var index = 0;

function gameEngine(param1, param2, param3, param4) {
  questions.innerHTML = param1;
  firstAnswer.innerHTML = param2;
  secondAnswer.innerHTML = param3;
  image.src = param4;
};

// function startGame(data) {
// gameEngine(data.steps[0].description, data.steps[0].img_src, data.steps[0].option1.description);
// }