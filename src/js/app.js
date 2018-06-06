// Replace ./data.json with your JSON feed
fetch('./js/data.json').then(response => {  
  return response.json();
}).then(data => {  

  firstAnswer.addEventListener('click', function() {
    index = data.steps[index].option1.next;
    questions.innerHTML = data.steps[index].description;
    firstAnswer.innerHTML = data.steps[index].option1.description;
    secondAnswer.innerHTML = data.steps[index].option2.description;
  });

  secondAnswer.addEventListener('click', function() {
    index = data.steps[index].option2.next;
    questions.innerHTML = data.steps[index].description;
    secondAnswer.innerHTML = data.steps[index].option2.description;
    firstAnswer.innerHTML = data.steps[index].option1.description;
  });

  image.src = data.steps[0].img_src;
}).catch(err => {  
  console.log('ERROR DATA');
});

var questions = document.querySelector('#questions');
var firstAnswer = document.querySelector('#answer1');
var secondAnswer = document.querySelector('#answer2');
var image = document.querySelector('#character');
var index = 0;


function game(param1, param2, param3, param4) {
  questions.innerHTML = param1;
  firstAnswer.innerHTML = param2;
  secondAnswer.innerHTML = param3;
  image.src = param4;
};

// secondAnswer.addEventListener('click', function() {
//   console.log('cucu');
// });

// function startGame(data) {
//   game(data.steps[0].description, data.steps[0].img_src, data.steps[0].option1.description);
// }