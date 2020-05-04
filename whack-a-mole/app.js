const square = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score');

let result = 0;

function randomSquare() {
  square.forEach(className => {
    className.classList.remove('mole');
  })
  let randomMolePosition = square[Math.floow(Math.random() * 9)];
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


