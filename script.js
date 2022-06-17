function cores() {
      let boxes = document.querySelectorAll('.box')
  let cores = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink', 'brown', 'grey']


  for(let i = 0; i < boxes.length; i++) {
    let element = boxes[i]
    function changeColor() {
      if (element.style.backgroundColor === ''){
        element.style.backgroundColor = cores[i]  
      } else {
        element.style.backgroundColor = '' 
      }

    }  
    element.addEventListener('click', changeColor)
  }
}
let buttonReset = document.querySelector('.reset')
let buttonStart = document.querySelector('.btn-start')
let boxes = document.querySelectorAll('.box')
let currentPlayer = ''

function changePlayer(){
  if(currentPlayer === 'x') {
      currentPlayer = '0'
    } else {
      currentPlayer = 'x'
    }
}


for (let i = 0; i < boxes.length; i++) {

  let element = boxes[i]
  function markBox() {
    if(element.innerHTML === ''){
      element.innerHTML = currentPlayer
      changePlayer()
    }
  console.log(currentPlayer) 

  } 
  element.addEventListener('click', markBox)

}