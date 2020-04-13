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
  const chosenCards = []
  const chosenCardId = []
  const cardsMatched = []

  function createGameBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'img/blank.jpg')
      card.setAttribute('data-id', i)
      //card.addEventListener('click', flipCard())
      gameBoard.appendChild(card)
    }
  }

  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOne = chosenCardId[0]
    const optionTwo = chosenCardId[1]
    if (chosenCards[0] === chosenCards[1]) {
      alert('You\'ve found a match!')
      cards[optionOne].setAttribute('src', 'img/white.png')
      cards[optionTwo].setAttribute('src', 'img/white.png')
      cardsMatched.push(chosenCards)
    } else {
      cards[optionOne].setAttribute('src', 'img/blank.png')
      cards[optionTwo].setAttribute('src', 'img/blank.png')
      alert('Sorry, there\'s no match! Try again!')
    }
    chosenCards = []
    chosenCardId = []
  }

  function flipCard() {
    const cardId = this.getAttribyte('data-id')
    chosenCards.push(cardArray[cardId].name)
    chosenCardId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (chosenCards.length === 2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createGameBoard()
})