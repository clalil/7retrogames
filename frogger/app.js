document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementsByClassName('grid')[0];
  [...Array(81)].forEach((_, div) => {
    div = document.createElement('div');
    container.appendChild(div);
  })

  container.childNodes[4].classList.add('ending-block')
  container.childNodes[76].classList.add('starting-block')

  const squares = document.querySelectorAll('.grid div')
  const timeLeft = document.querySelector('#time-left')
  const result = document.querySelector('#result')
  const startBtn = document.querySelector('#button')
  const width = 9
  let currentIndex = 76
})