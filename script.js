//Variables
let buttonReset = document.querySelector('.reset')
let buttonStart = document.querySelector('.btn-start')
let boxes = document.querySelectorAll('.box')
let playerX = document.querySelector('.player_x')
let playerO = document.querySelector('.player_o')
let selectStart = document.querySelector('.select-start')
let totalArea = document.querySelector('.total-area')
let subTitle = document.querySelector('.subtitle')
let showPlayer = document.querySelector('.player')
let reset = document.querySelector('.reset')
let activePlayerX = document.querySelector('.player-x')
let activePlayerO = document.querySelector('.player-o')
let currentPlayer = ''

//Events
playerX.addEventListener('click', selectPlayerX)

playerO.addEventListener('click', selectPlayerO)

reset.addEventListener('click', resetGame)

for (let i = 0; i < boxes.length; i++) {
  let element = boxes[i]
  function markBox() {
    console.log(currentPlayer)
    if(element.innerHTML === ''){
      element.innerHTML = currentPlayer
      changePlayer()
    }
  } 
  element.addEventListener('click', markBox)
}

function clearBoxes() {
  for (let i = 0; i < boxes.length; i++) {
    const element = boxes[i];
    if(element.innerHTML !== '') {
      element.innerHTML = '';
    } 
  }
}

//Functions
function resetGame() {
  selectStart.style.display = 'block'
  totalArea.style.display = 'none'
  subTitle.style.display = 'none'
  showPlayer.style.display = 'none'
  reset.style.display = 'none'
  clearBoxes()
}

function selectPlayerX() {
  activePlayerX.classList.add('player-active')
  activePlayerO.classList.remove('player-active')
  currentPlayer = 'X'
  selectStart.style.display = 'none'
  totalArea.style.display = 'block'
  subTitle.style.display = 'block'
  showPlayer.style.display = 'flex'
  reset.style.display = 'block'
}

function selectPlayerO() {
  activePlayerO.classList.add('player-active')
  activePlayerX.classList.remove('player-active')
  currentPlayer = 'O'
  selectStart.style.display = 'none'
  totalArea.style.display = 'block'
  subTitle.style.display = 'block'
  showPlayer.style.display = 'flex'
  reset.style.display = 'block'
}

function changePlayer(){
  if(currentPlayer === 'X') {
    currentPlayer = 'O'
    selectPlayerO()
    } else  if(currentPlayer === 'O'){
    currentPlayer = 'X'
    selectPlayerX()
  }
}

