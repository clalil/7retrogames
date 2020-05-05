document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.grid div');
  const result = document.querySelector('#result');
  const displayCurrentPlayer = document.querySelector('#current-player');

  let currentPlayer = 1;

  for (let i = 0; i < squares.length; i++) {
    (function(i) {
      //add an onclick to each square in the grid

      squares[i].onclick = function() {
        if(squares[i + 7].classList.contains('taken')) {
          if (currentPlayer === 1) {
            squares[i].classList.add('taken');
            squares[i].classList.add('player-one');

            currentPlayer = 2;
            displayCurrentPlayer.innerHTML = currentPlayer;
          } else if (currentPlayer === 2) {
            squares[i].classList.add('taken');
            squares[i].classList.add('player-two');

            currentPlayer = 1;
            displayCurrentPlayer.innerHTML = currentPlayer;
          } else {
            //if the square below your current isn't taken, you cannot choose it
            alert('you cannot go here')
          }
        }
      }
    })(i)
  }
})