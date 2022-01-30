import 'core-js/es/array'



// comment this to pass build
const unusedVariable = 'variable';
let deskArray = [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']];
let score = 0
let countOfGoblinAppear = 0

// for demonstration purpose only
export default function demo(value) {
  return value;
}
function randomGoblin() {
  const randomLine = Math.floor(Math.random() * 4)
  const randomCell = Math.floor(Math.random() * 4)
  deskArray[randomLine][randomCell] = 'goblin'
}

function handleKillGoblin() {
  score++
  countOfGoblinAppear = 0
  const scoreElement = document.querySelector('#score')
  scoreElement.innerHTML = 'Your current score = ' + score
}
function defeat() {
  alert("Game over! Your score: " + score)
  score = 0
  countOfGoblinAppear = 0
}

export function renderDesk() {
  
  const section = document.querySelector('section')
  section.innerHTML = ''
  deskArray = [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']]
  randomGoblin()
  deskArray.forEach((deskRow) => {
    const div = document.createElement('div')
    deskRow.forEach((cell) => {
      const span = document.createElement('span')
      if (cell === 'goblin') {
        span.setAttribute('class', 'goblin')
        span.addEventListener('click', handleKillGoblin)
      } else {
        span.removeEventListener('click', handleKillGoblin)
      }

      div.append(span)
    })
    section.append(div)
  })
  if(countOfGoblinAppear++ === 5){
    defeat()
  }
}
export function renderIntervalDesk(interval) {
  setInterval(() => renderDesk(), interval)
}
