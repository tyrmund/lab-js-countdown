const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

const timeSelector = document.querySelector('#time')
const startBtn = document.querySelector('#start-btn')
const toastWindow = document.querySelector('#toast')
const toastCloseBtn = document.querySelector('#close-toast')
const toastMsg = document.querySelector('#toast-message')

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButton = startBtn.addEventListener('click', () => {
  startCountdown()
})



// ITERATION 2: Start Countdown
function startCountdown() {

  console.log("startCountdown called!");
  // Your code goes here ...

  startBtn.disabled = true

  let time = remainingTime
  console.log(time);

  timer = setInterval(() => {

    if (time === 10) {
      showToast("⏰ Final countdown! ⏰")
    }

    time--
    timeSelector.innerText = time

    if (time === 5) {
      showToast("Start the engines! 💥")
    }

    if (time === 0) {
      showToast("Lift off! 🚀")
      clearInterval(timer)
    }

  }, 1000)
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  let time = 3
  const toastTimer = setInterval(() => {
    time--
    toastMsg.innerText = message
    toastWindow.setAttribute('class', 'toast show')

    if (time === 0) {
      toastWindow.setAttribute('class', 'toast')
      clearInterval(toastTimer)
    }
  }, 1000)

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  toastCloseBtn.addEventListener('click', () => {
    toastWindow.setAttribute('class', 'toast')
  })

}
