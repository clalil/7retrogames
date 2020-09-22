const container = document.getElementsByClassName('grid')[0];
let int = 1;

[...Array(9)].forEach((_, div) => {
  console.log(typeof div)
  div = document.createElement('div')
  div.classList.add('square');
  div.setAttribute('id', int++)
  container.appendChild(div)
})

const square = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score');

let result = 0;
let currentTime = timeLeft.textContent;

function randomSquare() {
  square.forEach(className => {
    className.classList.remove('mole');
  })

  let randomMolePosition = square[Math.floor(Math.random() * 9)];
  randomMolePosition.classList.add('mole');

  hitMolePosition = randomMolePosition.id
}

square.forEach(id => {
  id.addEventListener('mouseup', () => {
    if(id.id === hitMolePosition) {
      result = result + 1
      score.textContent = result
    }
  })
})

function moveMole() {
  let timerId = null;
  timerId = setInterval(randomSquare, 1000)
}

moveMole();

function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime
  if (currentTime === 0) {
    clearInterval(timerId);
    alert("Time's up! Your final score is " + result)
  }
}

let timerId = setInterval(countDown, 1000);