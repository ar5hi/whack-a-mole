
const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')
const start = document.querySelector('#start')
const reset = document.querySelector('#reset')

let result = 0
let time = 15
let light
let countdown

function lightOut() {
     squares.forEach((s) => s.classList.remove('mole'))
}

function lightUp() {
  const idNum = Math.floor(Math.random() * 8 + 1)
  light = document.querySelector(`.sq${idNum}`)
  light.classList.add('mole')
}

function scoreUpdate() {
  squares.forEach((square) => {
    square.addEventListener('click', function () {
      if (square.classList.contains('mole')) {
        result++
        score.textContent = result
      }
    })
  })
}

function timerOn() {
   countdown = setInterval(() => {
      if (time > 0) {
        lightOut()
      lightUp()
      time--
      timeLeft.textContent = time
     }
      if (time < 6) {
        timeLeft.style.color = 'darkred'
      }
      if (time === 0) {
        lightOut()
        clearInterval(countdown)
        alert(`GAME OVER!!! YOU SCORE ${result}`)
    }
  }, 1000)
}
const resetFunction = function () {
  result = 0
  time = 15
  timeLeft.textContent = time
  timeLeft.style.color = 'black'
  score.textContent = result
  clearInterval(countdown)
}

reset.addEventListener('click', resetFunction)

start.addEventListener('click', function () {
  gameOn()
  
})

function gameOn() {
    lightUp()
    timerOn()
  scoreUpdate()
}










