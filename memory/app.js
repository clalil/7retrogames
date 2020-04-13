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

  cardArray.sort(() => 0.5 - Math.random())

  const gameBoard = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  const resetBtn = document.querySelector('#reset')
  let chosenCards = []
  let chosenCardId = []
  let cardsMatched = []

  function createGameBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'img/blank.jpg')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      gameBoard.appendChild(card)
    }
  }

  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOne = chosenCardId[0]
    const optionTwo = chosenCardId[1]
    if (optionOne === optionTwo) {
      cards[optionOne].setAttribute('src', 'img/blank.jpg')
      alert('Please choose a different second card!')
    }
    else if (chosenCards[0] === chosenCards[1]) {
      alert('You\'ve found a match!')
      cards[optionOne].setAttribute('src', 'img/white.png')
      cards[optionTwo].setAttribute('src', 'img/white.png')
      cardsMatched.push(chosenCards)
      cards[optionOne].removeEventListener('click', flipCard)
      cards[optionTwo].removeEventListener('click', flipCard)
    } else {
      cards[optionOne].setAttribute('src', 'img/blank.jpg')
      cards[optionTwo].setAttribute('src', 'img/blank.jpg')
      alert('Sorry, there\'s no match! Try again!')
    }
    chosenCards = []
    chosenCardId = []
    resultDisplay.textContent = cardsMatched.length
    if (cardsMatched.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations, you\'ve matched all the cards!'
      resetBtn.style.display = 'block'
    }
  }

  function flipCard() {
    const cardId = this.getAttribute('data-id')
    chosenCards.push(cardArray[cardId].name)
    chosenCardId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (chosenCards.length === 2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createGameBoard()

  resetBtn.addEventListener('click', () => {window.location.reload(true)})
})