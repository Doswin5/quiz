const countdownEl = document.querySelector('#countdown')
let s = countdownEl.innerText

function countdown() {
  updateStorage('timer', s)
  s--
  if (s < 0) {
    alert(`Game over, your score is ${score}. Start a new game`)
    s = 31
    startNew()
  } else {
    countdownEl.innerText = s
  }
  // console.log(s, typeof s)
  setTimeout(() => {
    countdown()
  }, 1000)
}

countdown()


const num1 = Math.ceil(Math.random() * 10)
const num2 = Math.ceil(Math.random() * 10)

const questionEl = document.querySelector('#question')
const formEl = document.querySelector('#form')
const inputEl = document.querySelector('.input')
const scoreEl = document.querySelector('#score')


let score = JSON.parse(localStorage.getItem('score'))

scoreEl.innerText = `score: ${score}`

questionEl.innerText = `What is ${num1} multiply by ${num2}`

const correctAns = num1 * num2

formEl.addEventListener('submit', () => {
  const userAns = +inputEl.value 
  // console.log(userAns, typeof userAns)
  if (userAns === correctAns) {
    score ++
    updateStorage('score', score)
  } else {
    // score --
    // updateStorage('score', score)
    countdown()
  }
})

function startNew() {
  updateStorage('score', 0)
  score = JSON.parse(localStorage.getItem('score'))
  scoreEl.innerText = `score: ${score}`
}

function updateStorage(keyName, valueName) {
  localStorage.setItem(keyName, JSON.stringify(`${valueName}`))
}