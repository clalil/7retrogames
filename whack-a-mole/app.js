const container = document.getElementsByClassName('grid')[0];
let int = 1;

[...Array(9)].forEach((_, div) => {
  div = document.createElement('div')
  div.classList.add('square');
  div.setAttribute('id', int++)
  container.appendChild(div)
})

const hideTitle = document.querySelectorAll('h4')
const gameWon = document.querySelector('#result')
const btn = document.querySelector('button')
const square = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')
let result = 0
let currentTime = timeLeft.textContent
let timeId
let moveId

function randomSquare() {
  square.forEach(className => {
    className.classList.remove('mole')
  })

  let randomMolePosition = square[Math.floor(Math.random() * 9)]
  randomMolePosition.classList.add('mole')

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
  moveId = setInterval(randomSquare, 1000)
  timeId = setInterval(countDown, 1000)
}

function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime
  if (currentTime === 0) {
    clearInterval(timeId);
    clearInterval(moveId);
    square.forEach(className => {
      className.classList.remove('mole')
    })
    hideTitle.forEach(el => el.classList.add('hidden'))
    gameWon.textContent = "Time's up! Your final score is " + result
  }
}

btn.addEventListener('click', () => {
  clearInterval(timeId);
  clearInterval(moveId);

  timeLeft.textContent = 30
  currentTime = 30
  score.textContent = 0
  result = 0
  gameWon.textContent = ''
  console.log(hideTitle)
  hideTitle.forEach(el => el.classList.remove('hidden'))
  moveMole();
})
