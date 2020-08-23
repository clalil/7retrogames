document.addEventListener('DOMContentLoaded', () => {
function createDivs() {
  let container = document.getElementsByClassName("grid")[0];
  for (let i = 0; i < 100; i++) {
    let xtraDiv = document.createElement('div');
    container.appendChild(xtraDiv);
  }
}

const squares = document.querySelectorAll('.grid div');
const scoreDisplay = document.querySelector('span');
const startBtn = document.querySelector('.start');

const width = 10;
let currentIndex = 0; //first div in our grid
let appleIndex = 0 //first div in our grid
let currentSnake = [2, 1, 0] //div in our grid being 2 (Head), 0 being the end (tail), body is all 1s
let direction = 1; //Snake should always go one div down the array
let score = 0;
let speed = 0.9;
let intervalTime = 0;
let interval = 0;

//to start and restart game

function startGame() {
  currentSnake.forEach(index => square[index].classList.remove('snake'))
  squares[appleIndex].classList.remove('apple')
  clearInterval(interval)
  score = 0
  //randomApple()
  direction = 1
  scoreDisplay.innerText = score
  intervalTime = 1000
  currentSnake = [2,1,0]
  currentIndex = 0
  currentSnake.forEach(index => squares[index].classList.add('snake'))
  interval = setInterval(moveOutcomes, intervalTime)
}

//function that deals with ALL above outcomes of the snake

//deals with snake hitting border and snake hitting self

//deals with snake getting apple

//assign functions to keycodes
function control(e) {
  squares[currentIndex].classList.remove('snake') //we are removing the class of snake

  if(e.keycode === 39) {
    direction = 1 //if we press the right btn on our keyboard the snake will go right one div
  } else if (e.keycode === 38) {
    direction = -width //if we press up arrow, the snake will go back ten divs, appearing to go up
  } else if (e.keyCode === 37) {
    direction = -1 //if we press left arrow, the snake will go left one div
  } else if (e.keyCode === 40) {
    direction = +width // if we presss down, the snake head will instantly appear in the div ten divs from where u are now
  }
}

document.addEventListener('keyup', control)

createDivs();
});