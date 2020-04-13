document.addEventListener('DOMContentLoaded', () => {
  
  const cardArray = [
    {
      name: 'forrest',
      img: 'img/forrest.jpg'
    },
    {
      name: 'forrest',
      img: 'img/forrest.jpg'
    },
    {
      name: 'harbour',
      img: 'img/harbour.jpg'
    },
    {
      name: 'harbour',
      img: 'img/harbour.jpg'
    },
    {
      name: 'island',
      img: 'img/island.jpg'
    },
    {
      name: 'island',
      img: 'img/island.jpg'
    },
    {
      name: 'mountain',
      img: 'img/mountain.jpg'
    },
    {
      name: 'mountain',
      img: 'img/mountain.jpg'
    },
    {
      name: 'river',
      img: 'img/river.jpg'
    },
    {
      name: 'river',
      img: 'img/river.jpg'
    },
    {
      name: 'tasman',
      img: 'img/tasman.jpg'
    },
    {
      name: 'tasman',
      img: 'img/tasman.jpg'
    }
  ]

  const gameBoard = document.querySelector('.grid')

  function createGameBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'img/blank.jpg')
      card.setAttribute('data-id', i)
      //card.addEventListener('click', flipCard())
      gameBoard.appendChild(card)
    }
  }

  createGameBoard()
})