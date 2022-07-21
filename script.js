let winner = ''
let playCounter = 0
let currentPlayer = ''
let reset = document.querySelector('.reset')
let boxes = document.querySelectorAll('.box')
let subTitle = document.querySelector('.subtitle')
let showPlayer = document.querySelector('.player')
let playerWinner = document.querySelector('.winner')
let playings = document.querySelectorAll('.playing')
let totalArea = document.querySelector('.total-area')
let activePlayerX = document.querySelector('#playing-x')
let activePlayerO = document.querySelector('#playing-o')
let player = document.querySelectorAll('.select-player')
let selectStart = document.querySelector('.select-start')

reset.addEventListener('click', resetGame)

for(let i = 0; i < player.length; i++) {
  let play = player[i];
  play.addEventListener("click", selectPlayer);
}

for(let i = 0; i < boxes.length; i++) {
  let box = boxes[i]
  function markBox() {
    if(box.innerHTML === '' && winner === '') {
      box.innerHTML = currentPlayer
      playCounter++
      changePlayer()
      checkWinner()
      
    }
    showWinner()  
    checkDraw()
  } 
  box.addEventListener('click', markBox)
}

function playerActive() {
  if(currentPlayer === 'X') {
    activePlayerO.classList.add('player-active')
    activePlayerX.classList.remove('player-active')
    currentPlayer = 'O'
  } else {
    activePlayerX.classList.add('player-active')
    activePlayerO.classList.remove('player-active')
    currentPlayer = 'X'
  }
}

function hideGame() {
  selectStart.style.display = 'block'
  totalArea.style.display = 'none'
  subTitle.style.display = 'none'
  showPlayer.style.display = 'none'
  reset.style.display = 'none'
  playerWinner.style.display = 'none'
}

function resetGame() {
  for(let i = 0; i < playings.length; i++) {
    const playing = playings[i]
    playing.style.display = 'flex'
  }  
  
  for(let i = 0; i < boxes.length; i++) {
    const box = boxes[i]
    if(box.innerHTML !== '') {
      box.innerHTML = ''
      winner = ''
    } 
  }
  playCounter = 0
  hideGame()
}

function showGame() {
  selectStart.style.display = "none"
  totalArea.style.display = "block"
  subTitle.style.display = "block"
  showPlayer.style.display = "flex"
  reset.style.display = "block"
}

function selectPlayer(player) {
  if(player.target.innerHTML === 'Player X') {
    activePlayerX.classList.add('player-active')
    activePlayerO.classList.remove('player-active')
    currentPlayer = 'X'
  } else {
    activePlayerO.classList.add('player-active')
    activePlayerX.classList.remove('player-active')
    currentPlayer = 'O'
  }
  showGame()
}

function changePlayer() {
  playerActive()
}

function showWinner() {
  if(winner !== '') {
    for(let i = 0; i < playings.length; i++) {
      const playing = playings[i];
      playing.style.display = 'none'
    }  
    playerWinner.innerHTML = `THE WINNER WAS ${winner}.`
    playerWinner.style.display = 'block'
  }  
}

function checkWinner() {
  if((boxes[0].innerHTML === boxes[1].innerHTML) &&
    (boxes[0].innerHTML === boxes[2].innerHTML) &&
    (boxes[0].innerHTML !== '')) {   
    winner = boxes[0].innerHTML   
  } else if((boxes[0].innerHTML === boxes[3].innerHTML) &&
    (boxes[0].innerHTML === boxes[6].innerHTML) &&
    (boxes[0].innerHTML !== '')) {
    winner = boxes[0].innerHTML
  } else if((boxes[4].innerHTML === boxes[3].innerHTML) &&
    (boxes[4].innerHTML === boxes[5].innerHTML) &&
    (boxes[4].innerHTML !== '')) {
    winner = boxes[4].innerHTML
  } else if((boxes[4].innerHTML === boxes[1].innerHTML) &&
    (boxes[4].innerHTML === boxes[7].innerHTML) &&
    (boxes[4].innerHTML !== '')) {
    winner = boxes[4].innerHTML
  } else if((boxes[4].innerHTML === boxes[0].innerHTML) &&
    (boxes[4].innerHTML === boxes[8].innerHTML) &&
    (boxes[4].innerHTML !== '')) {
    winner = boxes[4].innerHTML
  } else if((boxes[4].innerHTML === boxes[2].innerHTML) &&
    (boxes[4].innerHTML === boxes[6].innerHTML) &&
    (boxes[4].innerHTML !== '')) {
    winner = boxes[4].innerHTML
  }  else if((boxes[8].innerHTML === boxes[2].innerHTML) &&
    (boxes[8].innerHTML === boxes[5].innerHTML) &&
    (boxes[8].innerHTML !== '')) {
    winner = boxes[8].innerHTML
  } else if((boxes[8].innerHTML === boxes[6].innerHTML) && 
    (boxes[8].innerHTML === boxes[7].innerHTML) &&
    (boxes[8].innerHTML !== '')) {
    winner = boxes[8].innerHTML
  }     
}

function checkDraw() {
  if(playCounter === 9 && winner === '') {
     for (let i = 0; i < playings.length; i++) {
       const playing = playings[i];
       playing.style.display = "none"
     }
     playerWinner.innerHTML = `DRAW GAME.`
     playerWinner.style.display = "block"   
    return true
  }
  return false
}

