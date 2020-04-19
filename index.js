let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
  // clear any existing timers
  clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    // check if we should stop it!
    if(secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    // display it
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const adjustedHour = hour > 12 ? hour - 12 : hour;
  const minutes = end.getMinutes();
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const mins = this.minutes.value;
  console.log(mins);
  timer(mins * 60);
  this.reset();
});
document.querySelector('#washhands').addEventListener('click', function() {
  document.querySelector('.image').style.background = 'url(assets/hand-wash.png) center no-repeat';
  document.querySelector('.image').style.backgroundSize = '90%';
  window.body
});
document.querySelector('#brushteeth').addEventListener('click', function() {
  document.querySelector('.image').style.background = 'url(assets/toothbrush.png) center no-repeat';
  document.querySelector('.image').style.backgroundSize = '90%';
  window.body
});
document.querySelector('#cleanup').addEventListener('click', function() {
  document.querySelector('.image').style.background = 'url(assets/cleanup.png) center no-repeat';
  document.querySelector('.image').style.backgroundSize = '90%';
  window.body
});
document.querySelector('#screentime').addEventListener('click', function() {
  document.querySelector('.image').style.background = 'url(assets/screentime.png) center no-repeat';
  document.querySelector('.image').style.backgroundSize = '90%';
  window.body
});
document.querySelector('#timeout').addEventListener('click', function() {
  document.querySelector('.image').style.background = 'url(assets/timeout.png) center no-repeat';
  document.querySelector('.image').style.backgroundSize = '90%';
  window.body
});
