document.addEventListener('DOMContentLoaded', () => {
  const cards = [
    {name: 'forrest'},
    {name: 'tasman'},
    {name: 'harbour'},
    {name: 'island'},
    {name: 'mountain'},
    {name: 'river'},
  ]

  const cardArray = cards.concat(cards)
  cardArray.sort(() => 0.5 - Math.random())

  const gameBoard = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  const resetBtn = document.querySelector('button')
  let chosenCards = []
  let chosenCardId = []
  let cardsMatched = []

  function createGameBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('object')
      card.setAttribute('type', 'image/jpg')
      card.classList.add('blank-card')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)

      gameBoard.appendChild(card)
    }
  }

  function checkForMatch() {
    const cards = document.querySelectorAll('object')
    const optionOne = chosenCardId[0]
    const optionTwo = chosenCardId[1]

    if (optionOne === optionTwo) {
      cards[optionOne].classList.remove(cards[optionOne].className)
      cards[optionOne].classList.add('blank-card')
      alert('Please choose a different second card!')
    }
    else if (chosenCards[0] === chosenCards[1]) {
      alert('You\'ve found a match!')
      cards[optionOne].classList.add('matched-card')
      cards[optionOne].classList.remove('blank-card')
      cards[optionTwo].classList.add('matched-card')
      cards[optionTwo].classList.remove('blank-card')

      cardsMatched.push(chosenCards)
      cards[optionOne].removeEventListener('click', flipCard)
      cards[optionTwo].removeEventListener('click', flipCard)
    } else {
      cards[optionOne].classList.remove(cards[optionOne].className)
      cards[optionOne].classList.add('blank-card')
      cards[optionTwo].classList.remove(cards[optionTwo].className)
      cards[optionTwo].classList.add('blank-card')
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

    this.classList.remove('blank-card')
    this.classList.add(cardArray[cardId].name)

    if (chosenCards.length === 2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createGameBoard()

  resetBtn.addEventListener('click', () => {window.location.reload(true)})
})